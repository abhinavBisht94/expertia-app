import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Navbar } from './pages/Navbar';
import { JobListings } from './pages/JobListings';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}

      <Box>
        <Navbar />

        <JobListings />
      </Box>
    </ChakraProvider>
  );
}

export default App;
