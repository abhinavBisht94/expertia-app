import { useEffect } from 'react';
import axios from 'axios';

//~ Chakra
import {
  Box,
  Link,
  Text,
  VStack,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';

//~ Routing
import { useNavigate } from 'react-router-dom';

export const NavSignMenu = () => {
  let userDetails = localStorage.getItem('expertiaUser') || '';

  //! Routing
  const navigate = useNavigate();

  return (
    <VStack>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar
            size={'md'}
            src={'https://cdn-icons-png.flaticon.com/512/3237/3237472.png'}
          />
        </MenuButton>
        <MenuList>
          {!userDetails ? (
            <Box>
              <MenuItem
                onClick={() => {
                  console.log('login');
                  navigate(`/login`);
                }}
              >
                Log In
              </MenuItem>

              <MenuDivider />

              <MenuItem
                onClick={() => {
                  navigate(`/signup`);
                }}
              >
                Sign up
              </MenuItem>
            </Box>
          ) : (
            <MenuItem
              onClick={() => {
                localStorage.removeItem('expertiaUser');
                navigate(`/`);
                // window.location.reload();
              }}
            >
              Sign Out
            </MenuItem>
          )}
        </MenuList>
      </Menu>

      {/* //* User unique ID */}
      {!userDetails ? (
        <Text>Signup / Login</Text>
      ) : (
        <>
          <Text>Unique user ID: </Text> <Text>{userDetails}</Text>
        </>
      )}
    </VStack>
  );
};
