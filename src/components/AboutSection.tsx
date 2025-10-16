// src/components/AboutSection.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  Progress,
  HStack,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import { type IconType } from 'react-icons';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  icon: IconType;
  color: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'JavaScript/TypeScript', level: 90, category: 'frontend' },
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'database' },
  { name: 'PostgreSQL', level: 75, category: 'database' },
  { name: 'React Native', level: 70, category: 'mobile' },
];

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    color: 'green.300',
    description:
      'Building responsive and interactive user interfaces with modern frameworks',
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    color: 'green.400',
    description: 'Creating robust server-side applications and RESTful APIs',
  },
  {
    title: 'Mobile Development',
    icon: FaMobile,
    color: 'green.200',
    description: 'Developing cross-platform mobile applications',
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    color: 'green.500',
    description: 'Designing and managing efficient database solutions',
  },
];

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Box
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
        borderColor: category.color,
        bg: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <VStack spacing='4' align='start'>
        <Flex
          w='12'
          h='12'
          align='center'
          justify='center'
          borderRadius='lg'
          bg={`rgba(72, 187, 120, 0.2)`}
        >
          <Icon as={category.icon} boxSize='6' color={category.color} />
        </Flex>
        <Heading size='md' color='white'>
          {category.title}
        </Heading>
        <Text color='gray.300' fontSize='sm'>
          {category.description}
        </Text>
      </VStack>
    </Box>
  );
};

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const progressColor = 'green';

  return (
    <Box>
      <HStack justify='space-between' mb='2'>
        <Text fontWeight='medium' color='white'>
          {skill.name}
        </Text>
        <Text fontSize='sm' color='green.300'>
          {skill.level}%
        </Text>
      </HStack>
      <Progress
        value={skill.level}
        size='sm'
        colorScheme={progressColor}
        borderRadius='full'
        bg='rgba(255, 255, 255, 0.1)'
        sx={{
          '& > div': {
            background: 'linear-gradient(90deg, green.400, green.300)',
          },
        }}
      />
    </Box>
  );
};

export const AboutSection: React.FC = () => {
  const bgGradient =
    'linear(110deg, green.900 0%, black 15%, green.900 50%,  black 85%, )';

  return (
    <Box py='20' bgGradient={bgGradient} id='about'>
      <Container maxW='container.xl'>
        {/* Section Header */}
        <Stack spacing='4' textAlign='center' mb='16'>
          <Heading as='h2' size='2xl' color='white'>
            About Me
          </Heading>
          <Text fontSize='lg' color='gray.300' maxW='3xl' mx='auto'>
            I'm a passionate software engineer with expertise in building
            scalable web applications. I love solving complex problems and
            creating seamless user experiences.
          </Text>
        </Stack>

        {/* About Content */}
        <Stack spacing='16'>
          {/* Bio Section */}
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing='8' mb='12'>
              <Stack spacing='4'>
                <Heading size='lg' color='white'>
                  My Journey
                </Heading>
                <Text color='gray.300' lineHeight='tall'>
                  With over X years of experience in software development, I've
                  worked on diverse projects ranging from e-commerce platforms
                  to real-time applications. I'm constantly learning and
                  adapting to new technologies to deliver the best solutions.
                </Text>
                <Text color='gray.300' lineHeight='tall'>
                  I believe in writing clean, maintainable code and following
                  best practices. My goal is to create applications that not
                  only meet requirements but exceed expectations.
                </Text>
              </Stack>

              <Stack spacing='4'>
                <Heading size='lg' color='white'>
                  What I Do
                </Heading>
                <Text color='gray.300' lineHeight='tall'>
                  I specialize in full-stack development, with a strong focus on
                  modern JavaScript frameworks and scalable backend
                  architectures. I'm experienced in both SQL and NoSQL
                  databases, cloud services, and DevOps practices.
                </Text>
                <Text color='gray.300' lineHeight='tall'>
                  When I'm not coding, I enjoy contributing to open-source
                  projects, writing technical articles, and mentoring aspiring
                  developers.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>

          {/* Skill Categories */}
          <Box>
            <Heading size='lg' color='white' mb='8' textAlign='center'>
              What I Offer
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing='6'>
              {skillCategories.map((category, index) => (
                <SkillCard key={index} category={category} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Technical Skills */}
          <Box>
            <Heading size='lg' color='white' mb='8' textAlign='center'>
              Technical Skills
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing='8'>
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
