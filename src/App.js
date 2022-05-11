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
import { Logo } from './Logo';
import NavBar from './NavBar';
import Content from './Content';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Content />
    </ChakraProvider>
  );
}

export default App;
