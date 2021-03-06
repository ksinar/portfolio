import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Content() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Hello, my name is <br />
            <Text as={'span'} color={'blue.400'}>
              Kaan Sinar
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize="2xl">
            I am an aspiring Software Developer. This website serves as a
            personal portfolio, highlighting my work experience and skills in
            software development. Feel free to check out the links on the
            navigation bar to see some of my work.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          ></Stack>
        </Stack>
      </Container>
    </>
  );
}
