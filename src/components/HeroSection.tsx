import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
  Link,
  Flex,
  Avatar,
  IconButton,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { bgGradient } from '../App';
import { BsArrowUpRight } from 'react-icons/bs';

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
          direction={{ base: 'column-reverse', lg: 'row' }}
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
              Abdulazeez Muritador
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
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing='4'
              pt='4'
              w={{ base: '100%', sm: 'auto' }}
            >
              <Button
                as={Link}
                href='https://wa.me/2348148985591?text=Hello%20I%20would%20like%20to%20work%20with%20you'
                target='_blank'
                rel='noopener noreferrer'
                size='lg'
                colorScheme='green'
                px='8'
                w={{ base: '100%', sm: 'auto' }}
                _hover={{
                  textDecoration: 'none',
                  transform: 'translateY(-2px)',
                }}
                transition='all 0.2s'
                display='flex'
                alignItems='center'
                gap={2}
              >
                Let's Talk <BsArrowUpRight size={16} />
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
                w={{ base: '100%', sm: 'auto' }}
                _hover={{
                  transform: 'translateY(-2px)',
                  bg: 'green.500',
                  color: 'white',
                }}
                transition='all 0.2s'
              >
                Download CV
              </Button>
            </Stack>

            {/* Social Links - Desktop */}
            <HStack spacing='4' pt='4' display={{ base: 'none', md: 'flex' }}>
              <Link href='https://github.com/muritador5050' isExternal>
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
              <Link
                href='https://linkedin.com/in/abdulazeez-muritador'
                isExternal
              >
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
              <Link
                href='https://twitter.com/az'
                target='_blank'
                rel='noopener noreferrer'
                isExternal
              >
                <Button
                  colorScheme='twitter'
                  size='lg'
                  variant='ghost'
                  color='white'
                  leftIcon={<FaTwitter size='24' />}
                  _hover={{ bg: 'green.500', color: 'white' }}
                >
                  Twitter
                </Button>
              </Link>
              <Link href='mailto:abdulazeezmuritador9@gmail.com'>
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

            {/* Social Links - Mobile (Icon Buttons) */}
            <Wrap
              spacing='4'
              pt='4'
              display={{ base: 'flex', md: 'none' }}
              justify='center'
            >
              <WrapItem>
                <Link href='https://github.com/muritador5050' isExternal>
                  <IconButton
                    aria-label='GitHub'
                    icon={<FaGithub size='24' />}
                    size='lg'
                    variant='ghost'
                    color='white'
                    _hover={{ bg: 'green.500', color: 'white' }}
                  />
                </Link>
              </WrapItem>
              <WrapItem>
                <Link
                  href='https://linkedin.com/in/abdulazeez-muritador'
                  isExternal
                >
                  <IconButton
                    aria-label='LinkedIn'
                    icon={<FaLinkedin size='24' />}
                    size='lg'
                    variant='ghost'
                    color='white'
                    _hover={{ bg: 'green.500', color: 'white' }}
                  />
                </Link>
              </WrapItem>
              <WrapItem>
                <Link
                  href='https://twitter.com/az'
                  target='_blank'
                  rel='noopener noreferrer'
                  isExternal
                >
                  <IconButton
                    aria-label='Twitter'
                    icon={<FaTwitter size='24' />}
                    size='lg'
                    variant='ghost'
                    color='white'
                    _hover={{ bg: 'green.500', color: 'white' }}
                  />
                </Link>
              </WrapItem>
              <WrapItem>
                <Link href='mailto:abdulazeezmuritador9@gmail.com'>
                  <IconButton
                    aria-label='Email'
                    icon={<FaEnvelope size='24' />}
                    size='lg'
                    variant='ghost'
                    color='white'
                    _hover={{ bg: 'green.500', color: 'white' }}
                  />
                </Link>
              </WrapItem>
            </Wrap>
          </Stack>

          {/* Right Content - Image */}
          <Box
            flex='1'
            display='flex'
            justifyContent={{ base: 'flex-end', lg: 'center' }}
            alignItems='center'
            w='100%'
          >
            <Box
              position='relative'
              w={{ base: '250px', sm: '300px', md: '400px' }}
              h={{ base: '250px', sm: '300px', md: '400px' }}
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

              {/* Gradient Border Container */}
              <Box
                position='relative'
                w='100%'
                h='100%'
                borderRadius='full'
                bgGradient='linear(135deg, green.300, green.500, cyan.400, green.300)'
                p='8px'
                boxShadow='2xl'
                zIndex='1'
              >
                {/* Profile Image */}
                <Avatar
                  src='/abdul_photo.png'
                  name='Abdulazeez'
                  borderRadius='full'
                  w='100%'
                  h='100%'
                  border='none'
                  position='relative'
                />
              </Box>

              {/* Floating Badge */}
              <Box
                position='absolute'
                bottom={{ base: '4', md: '8' }}
                right={{ base: '-2', md: '-4' }}
                bgGradient={bgGradient}
                px={{ base: '4', md: '6' }}
                py={{ base: '2', md: '3' }}
                borderRadius='full'
                boxShadow='xl'
                border='2px solid'
                borderColor='green.500'
                zIndex='2'
              >
                <Text
                  fontWeight='bold'
                  color='green.200'
                  fontSize={{ base: 'sm', md: 'md' }}
                >
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
