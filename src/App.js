import logo from './logo.svg';
import './App.css';
import { Box, Button, ButtonGroup, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Spacer } from "@chakra-ui/react"
import React from 'react';

function App() {
  return (
    <div>
      <Flex minWidth='max-content' p={5} alignItems='center' gap='2' backgroundColor='#282c34'>
        <Box p='2'>
          <Heading size='md' color='white'>Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>Sign Up</Button>
          <Button colorScheme='teal'>Log in</Button>
        </ButtonGroup>
      </Flex>
      <div className='App-header'>
      <Box width='500px' borderWidth="1px" borderRadius="lg" p={4}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button mt={4} colorScheme="teal">Sign Up</Button>
      </Box>
      </div>

    </div>
  );
}


export default App;
