import React from 'react';

//~ Chakra
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';

//~ Routing
import { useNavigate } from 'react-router-dom';

//~ COMPONENTS
import { NavSignMenu } from '../components/Navbar/NavSignMenu';

export const Navbar = () => {
  //! Routing
  const navigate = useNavigate();

  return (
    <Box
      p={'1rem 0rem'}
      bg={'linear-gradient(to top, #FFFFFF, #6DD5FA, #2980B9)'}
    >
      <Flex alignItems={'center'} justifyContent={'space-around'}>
        <Box>
          <Image
            width={'3rem'}
            src={'https://cdn-icons-png.flaticon.com/512/2544/2544087.png'}
            cursor={'pointer'}
            onClick={() => {
              navigate(`/`);
            }}
          />
        </Box>

        <Button
          colorScheme="facebook"
          variant="outline"
          onClick={() => {
            navigate(`/jobListings`);
          }}
        >
          Job Listings
        </Button>

        <Button
          colorScheme="facebook"
          variant="outline"
          onClick={() => {
            navigate(`/jobApplications`);
          }}
        >
          Job Applications
        </Button>

        {/* //* Sign in - Login - Logout Menu */}
        <NavSignMenu />
      </Flex>
    </Box>
  );
};
