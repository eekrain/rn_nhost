import React from 'react';
import {
  HamburgerIcon,
  Pressable,
  Heading,
  Box,
  HStack,
  Avatar,
  Button,
  Popover,
  Text,
  VStack,
  Icon,
  Spinner,
} from 'native-base';
import {AppNavProps} from '../../types/navigation';
import {useNhostAuth, generateAvatarName} from '../../shared/utils';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ICustomHeaderProps extends AppNavProps {}

const CustomHeader = (props: ICustomHeaderProps) => {
  const nhostAuth = useNhostAuth();

  const handleLogout = () => {
    nhostAuth.setLoading(true);
    nhostAuth.signOut().finally(() => nhostAuth.setLoading(false));
  };

  return (
    <HStack
      alignItems="center"
      mt="6"
      justifyContent="space-between"
      px="4"
      mb="6">
      <Pressable onPress={() => props.navigation.toggleDrawer()}>
        <HamburgerIcon size="sm" />
      </Pressable>
      <Heading size="md">{props.route.name}</Heading>
      <Box>
        <Popover
          trigger={triggerProps => (
            <Button
              variant="unstyled"
              borderRadius="full"
              {...triggerProps}
              bgColor="amber.500"
              size="sm">
              <Avatar bg="red.500" color="white">
                {generateAvatarName(nhostAuth.user.displayName)}
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
      </Box>
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
