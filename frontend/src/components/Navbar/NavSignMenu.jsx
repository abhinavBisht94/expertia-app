import React from 'react';

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
          <MenuItem>
            {/* <Link1 to="/login">Log In</Link1> */}
            <p>Log In</p>
          </MenuItem>
          <MenuItem>
            {/* <Link1 to="/signup">Sign up</Link1> */}
            <p>Sign up</p>
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => {
              // localStorage.removeItem('userid');
              // window.location.reload();
            }}
          >
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>

      {/* //* Username */}
      <Text>Signup / Login</Text>
    </VStack>
  );
};
