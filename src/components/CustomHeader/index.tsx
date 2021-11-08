import React from 'react';
// import {Button} from 'react-native';

import {
  Button,
  HamburgerIcon,
  Pressable,
  Heading,
  Box,
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
import {AppNavProps} from '../../types/navigation';
import {useNhostAuth, generateAvatarName} from '../../shared/utils';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useState} from 'react';

interface ICustomHeaderProps extends AppNavProps {}

const CustomHeader = (props: ICustomHeaderProps) => {
  const nhostAuth = useNhostAuth();

  const [isNotifPressed, setNotifPressed] = useState(false);
  const [isAvatarPressed, setAvatarPressed] = useState(false);
  // useEffect(() => {
  //   console.log(
  //     '🚀 ~ file: index.tsx ~ line 32 ~ CustomHeader ~ isNotifHover',
  //     isNotifHover,
  //   );
  // }, [isNotifHover]);
  const handleLogout = () => {
    nhostAuth.setLoading(true);
    nhostAuth.signOut().finally(() => nhostAuth.setLoading(false));
  };

  return (
    <HStack
      bgColor="red.600"
      alignItems="center"
      justifyContent="space-between"
      px="4"
      py="3">
      <HStack space="6">
        <Pressable onPress={() => props.navigation.toggleDrawer()}>
          <HamburgerIcon size="sm" color="white" />
        </Pressable>
        <Heading size="md" color="white">
          {props.route.name}
        </Heading>
      </HStack>
      <HStack space="4" alignItems="center">
        <VStack>
          <Badge
            bgColor={isNotifPressed ? 'orange.400' : 'orange.600'}
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
              <Avatar bgColor="red.100">
                <Text
                  color={isAvatarPressed ? 'red.400' : 'red.600'}
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

export const withHeader = (Component: any) => {
  return (props: AppNavProps) => {
    return (
      <>
        <CustomHeader {...props} />
        <Box px="4">
          <Component {...props} />
        </Box>
      </>
    );
  };
};
