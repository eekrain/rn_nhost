import React, {useState} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {Box, HStack, Text} from 'native-base';
import {generateAvatarName} from '../../utils';

interface Props {
  fallbackText: string;
  source: FastImageProps['source'];
  size: number;
  borderRadius?: number;
}

const MyAvatar = ({fallbackText, source, size, borderRadius = 100}: Props) => {
  const [isError, setError] = useState(false);
  return (
    <Box>
      {isError ? (
        <HStack
          justifyContent="center"
          alignItems="center"
          w={size}
          h={size}
          backgroundColor="gray.200"
          borderRadius={borderRadius === 100 ? 'full' : borderRadius}>
          <Text>{generateAvatarName(fallbackText)}</Text>
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
