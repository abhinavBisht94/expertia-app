import React from 'react';

//~ Chakra
import { Box, Text, Flex, Image, Button } from '@chakra-ui/react';

//~ LINKS
//

//~ COMPONENTS
import { NavSignMenu } from '../components/Navbar/NavSignMenu';

export const Navbar = () => {
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
          />
        </Box>

        <Button colorScheme="facebook" variant="outline">
          Job Listings
        </Button>

        <Button colorScheme="facebook" variant="outline">
          Job Applications
        </Button>

        {/* //* Sign in - Login - Logout Menu */}
        <NavSignMenu />
      </Flex>
    </Box>
  );
};
