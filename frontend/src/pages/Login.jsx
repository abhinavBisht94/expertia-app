import { useState } from 'react';
import axios from 'axios';

//~ Chakra
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';

export const Login = () => {
  let link = 'http://localhost:8080/auth/login';

  //! password show change state
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //! accepting form data
  const [user, setUser] = useState({});
  const handleChange = e => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //! submitting form data & error message prompt
  const [showErr, setShowErr] = useState(false);

  const handleSubmit = async () => {
    console.log('login user', user);

    let response = await axios.post(link, user).catch(err => {
      console.log('err:', err.response.data.message);
      setShowErr(true);
    });

    if (response) {
      setShowErr(false);
      console.log('response:', response.data[0]);
      localStorage.setItem('expertiaUser', response.data[0]);
      window.location.reload();

      //todo Navigate to Job Listings
    }
  };

  return (
    <Box w={'30%'} m={'2rem auto'} textAlign="center">
      <Text as="mark" fontSize="2xl" fontWeight={'bold'}>
        Login
      </Text>

      <FormControl>
        {/* //* Email Input */}
        <FormLabel>Email address</FormLabel>
        <Input
          variant="flushed"
          type="email"
          name="email"
          mb={'1rem'}
          placeholder="Enter email"
          onChange={handleChange}
        />

        {/* //* Password Input */}
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            variant="flushed"
            type={show ? 'text' : 'password'}
            name="password"
            pr="4.5rem"
            placeholder="Enter password"
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        {/* //* Wrong Email or password prompt */}

        {showErr ? (
          <FormHelperText color={'red'}>
            Recheck the entered values.
          </FormHelperText>
        ) : (
          <FormHelperText color={'white'}>
            Enter Email and password.
          </FormHelperText>
        )}

        {/* //* Form Submit */}
        <Button m={'1rem'} colorScheme="twitter" onClick={handleSubmit}>
          Login
        </Button>
      </FormControl>
    </Box>
  );
};
