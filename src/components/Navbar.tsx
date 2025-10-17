import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px={4}
      borderBottom='1px'
      borderColor='green.700'
      position='sticky'
      top='0'
      zIndex='1000'
      backdropFilter='blur(10px)'
      bg='rgba(0, 0, 0, 0.7)'
      boxShadow='sm'
    >
      <Container maxW='container.xl'>
        <Flex h='16' alignItems='center' justifyContent='space-between'>
          {/* Logo */}
          <ChakraLink
            as={RouterLink}
            to='/'
            _hover={{ textDecoration: 'none' }}
          >
            <Text
              fontSize='2xl'
              fontWeight='bold'
              bgGradient='linear(to-r, green.300, green.500)'
              bgClip='text'
              fontFamily='"Lobster", cursive'
            >
              OBASI
            </Text>
          </ChakraLink>

          {/* Desktop Navigation */}
          <HStack as='nav' spacing='1' display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.name}
                as={RouterLink}
                to={link.href}
                px='4'
                py='2'
                rounded='md'
                fontSize='md'
                fontWeight='medium'
                color='gray.300'
                _hover={{
                  textDecoration: 'none',
                  bg: 'green.800',
                  color: 'green.100',
                }}
                transition='all 0.2s'
              >
                {link.name}
              </ChakraLink>
            ))}
          </HStack>

          {/* Right Side Actions */}
          <HStack spacing='2'>
            {/* Resume Button */}
            <Button
              as='a'
              href='/resume.pdf'
              download
              colorScheme='green'
              size='sm'
              display={{ base: 'none', md: 'flex' }}
              _hover={{
                textDecoration: 'none',
                transform: 'translateY(-1px)',
              }}
              transition='all 0.2s'
            >
              Resume
            </Button>

            {/* Mobile menu button */}
            <IconButton
              size='md'
              icon={isOpen ? <IoClose /> : <GiHamburgerMenu />}
              aria-label='Open Menu'
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              color='white'
              bg='transparent'
              _hover={{ bg: 'green.700' }}
            />
          </HStack>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box pb='4' display={{ md: 'none' }}>
            <Stack as='nav' spacing='2'>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.name}
                  as={RouterLink}
                  to={link.href}
                  px='4'
                  py='2'
                  rounded='md'
                  fontWeight='medium'
                  color='gray.300'
                  _hover={{
                    textDecoration: 'none',
                    bg: 'green.800',
                    color: 'green.100',
                  }}
                  onClick={onClose}
                >
                  {link.name}
                </ChakraLink>
              ))}
              <Button
                as='a'
                href='/resume.pdf'
                download
                colorScheme='green'
                size='sm'
                w='full'
                _hover={{ textDecoration: 'none' }}
              >
                Download Resume
              </Button>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};
