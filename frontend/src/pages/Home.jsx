import React from 'react';

//~ Chakra
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';

export const Home = () => {
  return (
    <VStack justifyContent={'space-evenly'} gap="2rem">
      <Image
        src="https://www.expertia.ai/Full-Logo-Black.png"
        alt="Expertia-Logo"
        w={'15%'}
      />

      <Text fontSize="3xl" as="samp">
        Expertia Job Applications portal
      </Text>
    </VStack>
  );
};
