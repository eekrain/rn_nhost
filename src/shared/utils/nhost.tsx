import React from 'react';
import {createClient} from 'nhost-js-sdk';
import {BACKEND_HBP_ENDPOINT} from '@env';
import create, {GetState, SetState} from 'zustand';
import {StoreApiWithPersist, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createTrackedSelector} from 'react-tracked';
import {HASURA_ENDPOINT} from '@env';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {TUserRoleOptions} from '../../types/user';
import {useEffect} from 'react';

// import {UserRoles} from 'types/UserRoles';
// import {NhostAuthProvider} from '@nhost/react-auth';
// import {NhostApolloProvider} from '@nhost/react-apollo';
// import {ReactNode} from 'react';
// import {NhostAuthConnectUserState} from 'state/nhost/User';

export const nhostClient = createClient({
  baseURL: BACKEND_HBP_ENDPOINT,
  clientStorageType: 'react-native',
  clientStorage: AsyncStorage,
});

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
  updateRole: (role: string) => void;
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

export const getXHasuraRoleHeader = (role: TUserRoleOptions) => ({
  context: {
    headers: {
      'x-hasura-role': role,
    },
  },
});

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
    console.log(
      '🚀 ~ file: nhost.tsx ~ line 132 ~ ManageAuthenticatedUser ~ nhostAuth.user',
      nhostAuth.user,
    );
  }, [nhostAuth.user]);

  useEffect(() => {
    nhostClient.auth.isAuthenticatedAsync().then(isAuth => {
      if (!isAuth) {
        nhostAuth.signOut();
      }

      nhostAuth.setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
