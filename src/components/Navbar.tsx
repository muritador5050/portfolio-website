import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Container,
  Link,
  Text,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
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
          <Link href='#home' _hover={{ textDecoration: 'none' }}>
            <Text
              fontSize='2xl'
              fontWeight='bold'
              bgGradient='linear(to-r, green.300, green.500)'
              bgClip='text'
            >
              Abdulazeez.dev
            </Text>
          </Link>

          {/* Desktop Navigation */}
          <HStack as='nav' spacing='1' display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
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
              </Link>
            ))}
          </HStack>

          {/* Right Side Actions */}
          <HStack spacing='2'>
            {/* Resume Button */}
            <Button
              as={Link}
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
                <Link
                  key={link.name}
                  href={link.href}
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
                </Link>
              ))}
              <Button
                as={Link}
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
