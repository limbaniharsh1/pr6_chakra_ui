import logo from './logo.svg';
import './App.css';
import { Box, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React from 'react';

function App() {
  return (
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
  );
}


export default App;
