import React from 'react';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  Box,
  Pressable,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
  Image,
} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {getAppIcon} from '../../screens/app';

interface Props extends DrawerContentComponentProps {}

const CustomDrawerContent = (props: Props) => {
  return (
    <DrawerContentScrollView {...props}>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Image
            source={require('../../assets/images/logo.png')}
            alt="Logo Rocketjaket"
            h="12"
            resizeMode="contain"
          />
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={name}
                px="5"
                py="5"
                rounded="md"
                bg={
                  index === props.state.index
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'transparent'
                }
                onPress={_event => {
                  props.navigation.navigate(name);
                }}>
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.500'
                    }
                    size="5"
                    as={<FeatherIcon name={getAppIcon(name) as string} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.700'
                    }>
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
