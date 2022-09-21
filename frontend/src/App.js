import React from 'react';

//~ Routing
import { Routes, Route } from 'react-router-dom';

//~ Chakra
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

//~ PAGES
import { Navbar } from './pages/Navbar';
import { JobListings } from './pages/JobListings';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { JobApplications } from './pages/JobApplications';
import { Home } from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobListings" element={<JobListings />} />
        <Route path="/jobApplications" element={<JobApplications />} />
      </Routes>

      {/* ------------------------------------------- */}

      {/* <Login /> */}
    </ChakraProvider>
  );
}

export default App;
