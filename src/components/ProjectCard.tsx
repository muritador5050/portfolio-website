import {
  Box,
  Image,
  Heading,
  Text,
  Badge,
  Button,
  Stack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Box
      borderWidth='1px'
      borderColor='green.700'
      borderRadius='lg'
      overflow='hidden'
      bg='rgba(255, 255, 255, 0.05)'
      backdropFilter='blur(10px)'
      transition='transform 0.2s, box-shadow 0.2s'
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: 'green.500',
        bg: 'rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* 🖼️ Image */}
      <Box position='relative' overflow='hidden' h='240px'>
        <Image
          src={project.images[0]}
          fallbackSrc='https://via.placeholder.com/400x300?text=Image+Not+Found'
          alt={project.name}
          objectFit='cover'
          w='100%'
          h='100%'
          transition='transform 0.3s'
          _hover={{ transform: 'scale(1.05)' }}
        />

        {project.featured && (
          <Badge
            position='absolute'
            top='4'
            right='4'
            colorScheme='green'
            fontSize='sm'
            px='3'
            py='1'
            bg='green.500'
            color='white'
          >
            Featured
          </Badge>
        )}
      </Box>

      {/* 📄 Content */}
      <Box p='6'>
        <Stack spacing='3'>
          <Heading size='md' noOfLines={1} color='white'>
            {project.name}
          </Heading>

          <Text color='gray.300' noOfLines={3} fontSize='sm'>
            {project.description}
          </Text>

          <HStack spacing='2' flexWrap='wrap'>
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                colorScheme='green'
                variant='subtle'
                bg='rgba(72, 187, 120, 0.2)'
                color='green.300'
              >
                {tech}
              </Badge>
            ))}
          </HStack>

          <HStack spacing='3' pt='2'>
            {project.githubUrl && (
              <Button
                as={Link}
                href={project.githubUrl}
                isExternal
                leftIcon={<FaGithub />}
                size='sm'
                variant='outline'
                color='green.300'
                borderColor='green.500'
                _hover={{
                  bg: 'green.500',
                  color: 'white',
                  transform: 'translateY(-1px)',
                }}
                transition='all 0.2s'
              >
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                as={Link}
                href={project.liveUrl}
                isExternal
                leftIcon={<FaExternalLinkAlt />}
                size='sm'
                colorScheme='green'
                bg='green.500'
                _hover={{
                  bg: 'green.600',
                  transform: 'translateY(-1px)',
                }}
                transition='all 0.2s'
              >
                Live Demo
              </Button>
            )}
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
