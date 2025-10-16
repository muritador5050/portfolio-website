import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Divider,
  SimpleGrid,
  VStack,
  Heading,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from 'react-icons/fa';

interface FooterLink {
  name: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
];

export const Footer: React.FC = () => {
  const bgGradient =
    'linear(110deg, green.900 0%, black 15%, green.900 50%,  black 85%, )';
  const currentYear = new Date().getFullYear();

  return (
    <Box bgGradient={bgGradient} borderTop='1px' borderColor='green.700'>
      <Container maxW='container.xl' py='12'>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing='8' mb='8'>
          {/* Brand Section */}
          <VStack align='start' spacing='4'>
            <Text
              fontSize='2xl'
              fontWeight='bold'
              bgGradient='linear(to-r, green.300, green.500)'
              bgClip='text'
            >
              YourName.dev
            </Text>
            <Text color='gray.300' fontSize='sm'>
              Software Engineer & Full Stack Developer passionate about creating
              innovative solutions and beautiful user experiences.
            </Text>
            <HStack spacing='3'>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                >
                  <Box
                    w='10'
                    h='10'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    borderRadius='md'
                    bg='rgba(255, 255, 255, 0.1)'
                    color='green.300'
                    transition='all 0.3s'
                    _hover={{
                      bg: 'green.500',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <Icon as={social.icon} boxSize='5' />
                  </Box>
                </Link>
              ))}
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align='start' spacing='4'>
            <Heading size='sm' color='white'>
              Quick Links
            </Heading>
            <Stack spacing='2'>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color='gray.300'
                  fontSize='sm'
                  _hover={{
                    color: 'green.300',
                    textDecoration: 'none',
                    transform: 'translateX(4px)',
                  }}
                  transition='all 0.2s'
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </VStack>

          {/* Contact Info */}
          <VStack align='start' spacing='4'>
            <Heading size='sm' color='white'>
              Get In Touch
            </Heading>
            <Stack spacing='2' fontSize='sm' color='gray.300'>
              <Text>Lagos, Nigeria</Text>
              <Link
                href='mailto:your.email@example.com'
                _hover={{ color: 'green.300' }}
                transition='color 0.2s'
              >
                your.email@example.com
              </Link>
              <Link
                href='tel:+12345678900'
                _hover={{ color: 'green.300' }}
                transition='color 0.2s'
              >
                +1 (234) 567-8900
              </Link>
            </Stack>
          </VStack>
        </SimpleGrid>

        <Divider borderColor='green.700' mb='8' />

        {/* Bottom Section */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify='space-between'
          align='center'
          spacing='4'
        >
          <Text fontSize='sm' color='gray.300'>
            © {currentYear} YourName. All rights reserved.
          </Text>
          <HStack spacing='1' fontSize='sm' color='gray.300'>
            <Text>Built with</Text>
            <Icon as={FaHeart} color='green.300' boxSize='4' />
            <Text>using React, TypeScript & Chakra UI</Text>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
