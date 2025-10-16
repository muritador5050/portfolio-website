import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  HStack,
  VStack,
  Link,
  useToast,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { type IconType } from 'react-icons';

interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+1 (234) 567-8900',
    href: 'tel:+12345678900',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Lagos, Nigeria',
  },
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
];

interface ContactInfoCardProps {
  info: ContactInfo;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ info }) => {
  const content = (
    <HStack
      spacing='4'
      p='6'
      bg='rgba(255, 255, 255, 0.05)'
      borderWidth='1px'
      borderColor='green.700'
      borderRadius='xl'
      transition='all 0.3s'
      backdropFilter='blur(10px)'
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: 'green.500',
        bg: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      <Box
        w='12'
        h='12'
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='lg'
        bg='rgba(72, 187, 120, 0.2)'
        color='green.300'
      >
        <Icon as={info.icon} boxSize='6' />
      </Box>
      <VStack align='start' spacing='1'>
        <Text fontSize='sm' color='green.300' fontWeight='medium'>
          {info.label}
        </Text>
        <Text fontWeight='semibold' color='white'>
          {info.value}
        </Text>
      </VStack>
    </HStack>
  );

  return info.href ? (
    <Link href={info.href} _hover={{ textDecoration: 'none' }}>
      {content}
    </Link>
  ) : (
    content
  );
};

export const ContactSection: React.FC = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const bgGradient =
    'linear(110deg, green.900 0%, black 15%, green.900 50%,  black 85%, )';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with your actual form handling)
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Box py='20' bgGradient={bgGradient} id='contact'>
      <Container maxW='container.xl'>
        {/* Section Header */}
        <Stack spacing='4' textAlign='center' mb='16'>
          <Heading as='h2' size='2xl' color='white'>
            Get In Touch
          </Heading>
          <Text fontSize='lg' color='gray.300' maxW='2xl' mx='auto'>
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing='12'>
          {/* Left Side - Contact Info */}
          <Stack spacing='8'>
            <Box>
              <Heading size='lg' color='white' mb='6'>
                Contact Information
              </Heading>
              <Stack spacing='4'>
                {contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </Stack>
            </Box>

            {/* Social Links */}
            <Box>
              <Heading size='md' color='white' mb='4'>
                Follow Me
              </Heading>
              <HStack spacing='4'>
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} isExternal>
                    <Box
                      w='12'
                      h='12'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      borderRadius='lg'
                      bg='rgba(255, 255, 255, 0.1)'
                      color='green.300'
                      transition='all 0.3s'
                      _hover={{
                        bg: 'green.500',
                        color: 'white',
                        transform: 'translateY(-4px)',
                      }}
                    >
                      <Icon as={social.icon} boxSize='5' />
                    </Box>
                  </Link>
                ))}
              </HStack>
            </Box>
          </Stack>

          {/* Right Side - Contact Form */}
          <Box
            bg='rgba(255, 255, 255, 0.05)'
            p='8'
            borderRadius='xl'
            boxShadow='lg'
            backdropFilter='blur(10px)'
            border='1px solid'
            borderColor='green.700'
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing='6'>
                <FormControl isRequired>
                  <FormLabel color='white'>Name</FormLabel>
                  <Input
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    size='lg'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderColor='green.700'
                    color='white'
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.500' }}
                    _focus={{
                      borderColor: 'green.300',
                      boxShadow: '0 0 0 1px green.300',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color='white'>Email</FormLabel>
                  <Input
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your.email@example.com'
                    size='lg'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderColor='green.700'
                    color='white'
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.500' }}
                    _focus={{
                      borderColor: 'green.300',
                      boxShadow: '0 0 0 1px green.300',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color='white'>Subject</FormLabel>
                  <Input
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Project inquiry'
                    size='lg'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderColor='green.700'
                    color='white'
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.500' }}
                    _focus={{
                      borderColor: 'green.300',
                      boxShadow: '0 0 0 1px green.300',
                    }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color='white'>Message</FormLabel>
                  <Textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project...'
                    rows={6}
                    size='lg'
                    bg='rgba(255, 255, 255, 0.1)'
                    borderColor='green.700'
                    color='white'
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.500' }}
                    _focus={{
                      borderColor: 'green.300',
                      boxShadow: '0 0 0 1px green.300',
                    }}
                  />
                </FormControl>

                <Button
                  type='submit'
                  colorScheme='green'
                  size='lg'
                  w='full'
                  isLoading={isSubmitting}
                  loadingText='Sending...'
                  _hover={{ transform: 'translateY(-2px)' }}
                  transition='all 0.2s'
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
