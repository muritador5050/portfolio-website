// src/components/HeroSection.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { bgGradient } from '../App';

export const HeroSection: React.FC = () => {
  return (
    <Box
      bgGradient={bgGradient}
      minH='100vh'
      display='flex'
      alignItems='center'
      py='20'
      id='home'
    >
      <Container maxW='container.xl'>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align='center'
          justify='space-between'
          gap='12'
        >
          {/* Left Content */}
          <Stack spacing='6' flex='1' maxW={{ base: '100%', lg: '600px' }}>
            {/* Greeting */}
            <Text
              fontSize='xl'
              fontWeight='semibold'
              color='green.300'
              textTransform='uppercase'
              letterSpacing='wider'
            >
              Hello, I'm
            </Text>

            {/* Name */}
            <Heading as='h1' size='3xl' color='white' lineHeight='1.2'>
              Your Name Here
            </Heading>

            {/* Title/Role */}
            <Heading as='h2' size='xl' color='green.200' fontWeight='medium'>
              Software Engineer & Full Stack Developer
            </Heading>

            {/* Description */}
            <Text fontSize='lg' color='gray.300' lineHeight='tall'>
              I build exceptional digital experiences with modern web
              technologies. Passionate about creating scalable, user-friendly
              applications that solve real-world problems.
            </Text>

            {/* CTA Buttons */}
            <HStack spacing='4' pt='4'>
              <Button
                as={Link}
                href='#projects'
                size='lg'
                colorScheme='green'
                px='8'
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(-2px)',
                }}
                transition='all 0.2s'
              >
                View My Work
              </Button>
              <Button
                as={Link}
                href='/resume.pdf'
                download
                size='lg'
                variant='outline'
                color='white'
                borderColor='green.300'
                leftIcon={<HiDownload />}
                px='8'
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: 'green.500',
                  color: 'white',
                }}
                transition='all 0.2s'
              >
                Download CV
              </Button>
            </HStack>

            {/* Social Links */}
            <HStack spacing='4' pt='4'>
              <Link href='https://github.com/yourusername' isExternal>
                <Button
                  size='lg'
                  variant='ghost'
                  color='white'
                  leftIcon={<FaGithub size='24' />}
                  _hover={{ bg: 'green.500', color: 'white' }}
                >
                  GitHub
                </Button>
              </Link>
              <Link href='https://linkedin.com/in/yourusername' isExternal>
                <Button
                  size='lg'
                  variant='ghost'
                  color='white'
                  leftIcon={<FaLinkedin size='24' />}
                  _hover={{ bg: 'green.500', color: 'white' }}
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href='https://twitter.com/yourusername' isExternal>
                <Button
                  size='lg'
                  variant='ghost'
                  color='white'
                  leftIcon={<FaTwitter size='24' />}
                  _hover={{ bg: 'green.500', color: 'white' }}
                >
                  Twitter
                </Button>
              </Link>
              <Link href='mailto:your.email@example.com'>
                <Button
                  size='lg'
                  variant='ghost'
                  color='white'
                  leftIcon={<FaEnvelope size='24' />}
                  _hover={{ bg: 'green.500', color: 'white' }}
                >
                  Email
                </Button>
              </Link>
            </HStack>
          </Stack>

          {/* Right Content - Image */}
          <Box
            flex='1'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Box
              position='relative'
              w={{ base: '300px', md: '400px' }}
              h={{ base: '300px', md: '400px' }}
            >
              {/* Background Decoration */}
              <Box
                position='absolute'
                top='0'
                right='0'
                w='100%'
                h='100%'
                bg='green.500'
                borderRadius='full'
                opacity='0.1'
                filter='blur(40px)'
              />

              {/* Profile Image */}
              <Image
                src='https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/profile-photo.jpg'
                alt='Your Name'
                borderRadius='full'
                objectFit='cover'
                w='100%'
                h='100%'
                border='8px solid'
                borderColor='white'
                boxShadow='2xl'
                position='relative'
                zIndex='1'
              />

              {/* Floating Badge */}
              <Box
                position='absolute'
                bottom='8'
                right='-4'
                bg='white'
                px='6'
                py='3'
                borderRadius='full'
                boxShadow='xl'
                border='2px solid'
                borderColor='green.500'
                zIndex='2'
              >
                <Text fontWeight='bold' color='green.600'>
                  Available for work
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
