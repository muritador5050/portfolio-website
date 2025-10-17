import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
  VStack,
  Flex,
} from '@chakra-ui/react';

import {
  skillCategories,
  skills,
  type Skill,
  type SkillCategory,
} from '../utils/Skills';

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

interface SkillIconCardProps {
  skill: Skill;
}

const SkillIconCard: React.FC<SkillIconCardProps> = ({ skill }) => {
  return (
    <Box
      p='6'
      bg='rgba(255, 255, 255, 0.05)'
      borderWidth='1px'
      borderColor='green.700'
      borderRadius='lg'
      transition='all 0.3s'
      backdropFilter='blur(10px)'
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        borderColor: skill.color,
        bg: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      <VStack spacing='3'>
        <Flex
          w='16'
          h='16'
          align='center'
          justify='center'
          borderRadius='lg'
          bg='rgba(255, 255, 255, 0.05)'
          transition='all 0.3s'
          _hover={{
            bg: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <Icon as={skill.icon} boxSize='8' color={skill.color} />
        </Flex>
        <Text
          fontWeight='medium'
          color='white'
          fontSize='sm'
          textAlign='center'
        >
          {skill.name}
        </Text>
      </VStack>
    </Box>
  );
};

export const AboutSection: React.FC = () => {
  const bgGradient =
    'linear(110deg, green.900 0%, black 15%, green.900 50%, black 85%)';

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
                  With over 5 years of experience in software development, I've
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
                  When I'm not coding, I enjoy exploring new technologies,
                  working on side projects, and sharing knowledge with other
                  developers.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>

          {/* Skill Categories */}
          <Box>
            <Heading size='lg' color='white' mb='8' textAlign='center'>
              What I'm Offering
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
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing='6'>
              {skills.map((skill, index) => (
                <SkillIconCard key={index} skill={skill} />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
