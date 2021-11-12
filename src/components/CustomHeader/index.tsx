import React from 'react';
// import {Button} from 'react-native';

import {
  Button,
  HamburgerIcon,
  Pressable,
  Heading,
  HStack,
  Avatar,
  Popover,
  Text,
  VStack,
  Icon,
  Spinner,
  IconButton,
  Badge,
} from 'native-base';
import {useNhostAuth, generateAvatarName} from '../../shared/utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import {allAppRoutes, AppNavProps} from '../../screens/app';

export const customHeaderHeight: number = 70;

const getRouteNiceName = (routeName: string) => {
  const niceName = allAppRoutes.find(
    route => route.name === routeName,
  )?.routeNiceName;

  return niceName ? niceName : '';
};

interface ICustomHeaderProps extends AppNavProps {}

const CustomHeader = (props: ICustomHeaderProps) => {
  const nhostAuth = useNhostAuth();

  const [isNotifPressed, setNotifPressed] = useState(false);
  const [isAvatarPressed, setAvatarPressed] = useState(false);

  const handleLogout = () => {
    nhostAuth.setLoading(true);
    nhostAuth.signOut().finally(() => nhostAuth.setLoading(false));
  };

  return (
    <HStack
      bgColor="milano_red.500"
      alignItems="center"
      justifyContent="space-between"
      px="4"
      height={customHeaderHeight}>
      <HStack space="6">
        <Pressable onPress={() => props.navigation.toggleDrawer()}>
          <HamburgerIcon size="sm" color="white" />
        </Pressable>
        <Heading size="md" color="white">
          {getRouteNiceName(props.route.name)}
        </Heading>
      </HStack>
      <HStack space="4" alignItems="center">
        <VStack>
          <Badge
            bgColor={isNotifPressed ? 'orange.300' : 'orange.500'}
            rounded="full"
            mb={-6}
            mr={0}
            zIndex={1}
            variant="solid"
            alignSelf="flex-end"
            _text={{
              fontSize: 12,
            }}>
            2
          </Badge>
          <IconButton
            variant="ghost"
            mx={{
              base: 'auto',
              md: 0,
            }}
            rounded="full"
            p="2"
            _icon={{as: FeatherIcon, name: 'bell', color: 'white'}}
            onPressIn={() => setNotifPressed(true)}
            onPressOut={() => setNotifPressed(false)}
          />
        </VStack>
        <Popover
          trigger={triggerProps => (
            <Button
              onPressIn={() => setAvatarPressed(true)}
              onPressOut={() => setAvatarPressed(false)}
              variant="unstyled"
              borderRadius="full"
              {...triggerProps}
              size="sm"
              p="0">
              <Avatar bgColor="milano_red.100">
                <Text
                  color={isAvatarPressed ? 'milano_red.400' : 'milano_red.600'}
                  fontWeight="bold"
                  letterSpacing="2xl">
                  {generateAvatarName(nhostAuth.user.displayName)}
                </Text>
              </Avatar>
            </Button>
          )}>
          <Popover.Content accessibilityLabel="User settings">
            <Popover.Header>
              <Text>Hai, {nhostAuth.user.displayName}!</Text>
            </Popover.Header>
            <Popover.Body>
              <VStack space="3">
                <Pressable
                  px="2"
                  py="2"
                  rounded="md"
                  onPress={_event => {
                    handleLogout();
                  }}>
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="red.600"
                      size="sm"
                      as={
                        nhostAuth.isLoading ? (
                          <Spinner color="red.600" />
                        ) : (
                          <FeatherIcon name="log-out" />
                        )
                      }
                    />
                    <Text fontSize="md" fontWeight="500" color="red.600">
                      Logout
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </HStack>
    </HStack>
  );
};
export default CustomHeader;
