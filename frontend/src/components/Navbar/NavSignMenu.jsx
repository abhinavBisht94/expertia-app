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

export const NavSignMenu = () => {
  let userDetails = localStorage.getItem('expertiaUser') || '';

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
            <>
              <MenuItem>
                {/* <Link1 to="/login">Log In</Link1> */}
                <p>Log In</p>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                {/* <Link1 to="/signup">Sign up</Link1> */}
                <p>Sign up</p>
              </MenuItem>
            </>
          ) : (
            <MenuItem
              onClick={() => {
                localStorage.removeItem('expertiaUser');
                window.location.reload();
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
