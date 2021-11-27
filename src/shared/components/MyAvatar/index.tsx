import React, {useState} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {Box, HStack, Text, IBoxProps} from 'native-base';
import {generateAvatarName} from '../../utils';

interface Props {
  fallbackText: string;
  source: Source;
  size: number;
  borderRadius?: number;
  bgColor?: IBoxProps['bgColor'];
  textColor?: IBoxProps['color'];
  fontWeight?: IBoxProps['fontWeight'];
}

const MyAvatar = ({
  fallbackText,
  source,
  size,
  borderRadius = 100,
  bgColor = 'gray.200',
  textColor,
  fontWeight = 'bold',
}: Props) => {
  const [isError, setError] = useState(false);
  return (
    <Box>
      {isError || !source?.uri ? (
        <HStack
          justifyContent="center"
          alignItems="center"
          w={size}
          h={size}
          bgColor={bgColor}
          borderRadius={borderRadius === 100 ? 'full' : borderRadius}>
          <Text fontWeight={fontWeight} color={textColor} letterSpacing="2xl">
            {generateAvatarName(fallbackText)}
          </Text>
        </HStack>
      ) : (
        <FastImage
          source={source}
          style={{borderRadius, width: size, height: size}}
          resizeMode="cover"
          onError={() => {
            setError(true);
          }}
        />
      )}
    </Box>
  );
};

export default MyAvatar;
