import React from 'react';
import {createClient} from 'nhost-js-sdk';
import create, {GetState, SetState} from 'zustand';
import {StoreApiWithPersist, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createTrackedSelector} from 'react-tracked';
import {HASURA_ENDPOINT, BACKEND_HBP_ENDPOINT} from '@env';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {TUserRoleOptions} from '../../types/user';
import {useEffect} from 'react';
import {useUser_GetUserByIdQuery} from '../../graphql/gql-generated';

export const nhostClient = createClient({
  baseURL: BACKEND_HBP_ENDPOINT,
  clientStorageType: 'react-native',
  clientStorage: AsyncStorage,
});

export const {auth, storage} = nhostClient;

interface INhostAuthStore {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: {
    userId?: string | null;
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    role?: string | null;
  };
  setLoading: (isLoading: boolean) => void;
  updateRole: (role: string | null | undefined) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const useNhostStore = create<
  INhostAuthStore,
  SetState<INhostAuthStore>,
  GetState<INhostAuthStore>,
  StoreApiWithPersist<INhostAuthStore>
>(
  persist(
    (_set, _get) => ({
      isLoading: true as INhostAuthStore['isLoading'],
      isAuthenticated: false as INhostAuthStore['isLoading'],
      user: {
        userId: null,
        displayName: null,
        email: null,
        photoURL: null,
        role: null,
      } as INhostAuthStore['user'],
      setLoading: isLoading => {
        _set(state => ({
          ...state,
          isLoading,
        }));
      },
      updateRole: role => {
        _set(state => ({
          ...state,
          user: {
            ...state.user,
            role,
          },
        }));
      },
      signIn: async (email, password) => {
        const res = await nhostClient.auth.login({email, password});

        _set(state => ({
          ...state,
          isAuthenticated: true,
          user: {
            ...state.user,
            userId: res.user?.id,
            displayName: res.user?.display_name,
            email: res.user?.email,
            photoURL: res.user?.avatar_url,
          },
        }));
      },
      signOut: async () => {
        await nhostClient.auth.logout();
        _set(state => ({
          ...state,
          isAuthenticated: false,
          user: {
            userId: null,
            role: null,
            displayName: null,
            email: null,
            photoURL: null,
          },
        }));
      },
    }),
    {name: 'nhost-auth', getStorage: () => AsyncStorage},
  ),
);

export const useNhostAuth = createTrackedSelector(useNhostStore);

interface IGetXHasuraRoleHeader {
  role?: TUserRoleOptions | null;
  withUserId?: boolean;
}

interface IHasuraHeader {
  'x-hasura-role': TUserRoleOptions | null;
  'x-hasura-user-id': string | null;
}

export const getXHasuraContextHeader = ({
  role = null,
  withUserId = false,
}: IGetXHasuraRoleHeader) => {
  const headers: IHasuraHeader = {
    'x-hasura-role': role,
    'x-hasura-user-id': null,
  };

  if (withUserId) {
    headers['x-hasura-user-id'] = nhostClient.auth.getClaim(
      'x-hasura-user-id',
    ) as string | null;
  }

  return {context: {headers: headers}};
};

interface INhostProviderProps {
  children: React.ReactNode;
}

export const NhostCustomProvider = ({children}: INhostProviderProps) => {
  return (
    <NhostApolloProvider auth={nhostClient.auth} gqlEndpoint={HASURA_ENDPOINT}>
      <ManageAuthenticatedUser />
      {children}
    </NhostApolloProvider>
  );
};

const ManageAuthenticatedUser = () => {
  const nhostAuth = useNhostAuth();

  useEffect(() => {
    nhostClient.auth.isAuthenticatedAsync().then(isAuth => {
      if (!isAuth) {
        nhostAuth.signOut();
      }

      nhostAuth.setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = useUser_GetUserByIdQuery({
    variables: {
      id: nhostAuth.user?.userId,
    },
    ...getXHasuraContextHeader({role: 'me', withUserId: true}),
  });
  useEffect(() => {
    nhostAuth.setLoading(getUserData.loading);
  }, [getUserData.loading, nhostAuth]);

  useEffect(() => {
    if (!getUserData.data || !getUserData.data.users_by_pk) {
      return;
    }
    const data = getUserData?.data?.users_by_pk;

    nhostAuth.updateRole(data.account?.default_role);
  }, [getUserData.loading, getUserData.data, nhostAuth]);
  return null;
};
