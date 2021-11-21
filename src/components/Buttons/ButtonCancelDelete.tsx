import React from 'react';
import {Button, Icon, IButtonProps} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends IButtonProps {
  customText?: string;
}

const ButtonCancelDelete = ({size, customText, ...rest}: Props) => {
  return (
    <Button
      size={size ? size : 'md'}
      colorScheme="milano_red"
      variant="ghost"
      leftIcon={<Icon as={Feather} name="x" size="sm" />}
      {...rest}>
      {customText ? customText : 'Cancel Delete'}
    </Button>
  );
};

export default ButtonCancelDelete;
