import { useState } from 'react';
import emailjs from '@emailjs/browser';
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
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
    value: 'abdulazeezmuritador9@gmail.com',
    href: 'mailto:abdulazeezmuritador9@gmail.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+(234)814-898-5591',
    href: 'tel:+2348148985591',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Lagos, Nigeria',
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/muritador5050', label: 'GitHub' },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/abdulazeez-muritador',
    label: 'LinkedIn',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/Az',
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
      align='flex-start'
    >
      <Box
        w='12'
        h='12'
        minW='12'
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius='lg'
        bg='rgba(72, 187, 120, 0.2)'
        color='green.300'
      >
        <Icon as={info.icon} boxSize='6' />
      </Box>
      <VStack align='start' spacing='1' minW='0' flex='1'>
        <Text fontSize='sm' color='green.300' fontWeight='medium'>
          {info.label}
        </Text>
        <Text
          fontWeight='semibold'
          color='white'
          wordBreak='break-all'
          overflowWrap='anywhere'
          fontSize={{ base: 'sm', md: 'md' }}
        >
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitterName, setSubmitterName] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const bgGradient =
    'linear(110deg, green.900 0%, black 15%, green.900 50%,  black 85%, )';

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      // Save name for thank you message
      setSubmitterName(formData.name);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Show thank you modal
      onOpen();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Error sending message',
        description:
          'Something went wrong. Please try again or email me directly at abdulazeezmuritador9@gmail.com',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Thank You Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size='lg'>
        <ModalOverlay backdropFilter='blur(10px)' />
        <ModalContent
          bg='rgba(0, 0, 0, 0.95)'
          borderWidth='2px'
          borderColor='green.500'
          borderRadius='2xl'
          p='4'
        >
          <ModalCloseButton color='white' />
          <ModalHeader>
            <VStack spacing='4' pt='4'>
              <Box
                w='20'
                h='20'
                display='flex'
                alignItems='center'
                justifyContent='center'
                borderRadius='full'
                bg='rgba(72, 187, 120, 0.2)'
                border='3px solid'
                borderColor='green.500'
              >
                <Icon as={FaCheckCircle} boxSize='10' color='green.400' />
              </Box>
              <Heading size='xl' color='white' textAlign='center'>
                Message Sent Successfully!
              </Heading>
            </VStack>
          </ModalHeader>
          <ModalBody>
            <VStack spacing='4' py='4'>
              <Text fontSize='lg' color='gray.300' textAlign='center'>
                Thank you for reaching out, {submitterName}! 🎉
              </Text>
              <Text color='gray.400' textAlign='center'>
                I've received your message and will get back to you as soon as
                possible. Usually within 24-48 hours.
              </Text>
              <Box
                w='full'
                p='4'
                bg='rgba(72, 187, 120, 0.1)'
                borderRadius='lg'
                borderWidth='1px'
                borderColor='green.700'
              >
                <Text fontSize='sm' color='green.300' textAlign='center'>
                  💡 In the meantime, feel free to check out my projects or
                  connect with me on social media!
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme='green'
              size='lg'
              w='full'
              onClick={onClose}
              _hover={{ transform: 'translateY(-2px)' }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
