import React, {useState} from 'react';
import FastImage, {Source} from 'react-native-fast-image';
import {Box, HStack, Text, IBoxProps} from 'native-base';
import {generateAvatarName} from '../../utils';

interface Props {
  fallbackText: string;
  source: Source;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderTopRadius?: number;
  bgColor?: IBoxProps['bgColor'];
  textColor?: IBoxProps['color'];
  fontSize?: IBoxProps['fontSize'];
  fontWeight?: IBoxProps['fontWeight'];
  topRightElement?: JSX.Element;
}

const MyAvatar = ({
  fallbackText,
  source,
  size,
  width,
  height,
  borderRadius = 100,
  borderTopRadius,
  bgColor = 'gray.200',
  textColor,
  topRightElement,
  fontSize,
  fontWeight = 'bold',
}: Props) => {
  const [isError, setError] = useState(false);
  return (
    <Box>
      {isError || !source?.uri ? (
        <HStack
          position="relative"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          w={size ? size : width}
          h={size ? size : height}
          bgColor={bgColor}
          borderTopRadius={borderTopRadius}
          borderRadius={
            borderTopRadius
              ? undefined
              : borderRadius === 100
              ? 'full'
              : borderRadius === 0
              ? 'none'
              : borderRadius
          }>
          {topRightElement && (
            <Box position="absolute" zIndex={2} top={0} right={0}>
              {topRightElement}
            </Box>
          )}
          <Text
            fontWeight={fontWeight}
            color={textColor}
            letterSpacing="2xl"
            textTransform="uppercase"
            fontSize={fontSize}>
            {generateAvatarName(fallbackText)}
          </Text>
        </HStack>
      ) : (
        <Box position="relative" overflow="hidden">
          {topRightElement && (
            <Box position="absolute" zIndex={2} top={0} right={0}>
              {topRightElement}
            </Box>
          )}
          <FastImage
            source={source}
            style={{
              borderRadius: borderTopRadius ? undefined : borderRadius,
              borderTopLeftRadius: borderTopRadius
                ? borderTopRadius
                : undefined,
              borderTopRightRadius: borderTopRadius
                ? borderTopRadius
                : undefined,
              width: size ? size : width,
              height: size ? size : height,
            }}
            resizeMode="cover"
            onError={() => {
              setError(true);
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default MyAvatar;
