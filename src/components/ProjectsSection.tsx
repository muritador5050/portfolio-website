import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard';
import {
  projects,
  getFeaturedProjects,
  getProjectsByCategory,
} from '../data/Projects';

export const ProjectsSection: React.FC = () => {
  const bgGradient =
    'linear(110deg, green.900 0%, black 15%, green.900 50%,  black 85%, )';

  return (
    <Box py='20' id='projects' bgGradient={bgGradient}>
      <Container maxW='container.xl'>
        {/* Section Header */}
        <Box textAlign='center' mb='12'>
          <Heading as='h2' size='2xl' mb='4' color='white'>
            My Projects
          </Heading>
          <Text fontSize='lg' color='gray.300' maxW='2xl' mx='auto'>
            Here are some of my side projects that showcase my skills in
            software development and engineering.
          </Text>
        </Box>

        {/* Tabs for filtering */}
        <Tabs variant='soft-rounded' colorScheme='green' align='center'>
          <TabList mb='8' flexWrap='wrap' justifyContent='center' gap='2'>
            <Tab
              color='gray.300'
              _selected={{ color: 'white', bg: 'green.500' }}
              _hover={{ bg: 'green.700' }}
            >
              All Projects
            </Tab>
            <Tab
              color='gray.300'
              _selected={{ color: 'white', bg: 'green.500' }}
              _hover={{ bg: 'green.700' }}
            >
              Featured
            </Tab>
            <Tab
              color='gray.300'
              _selected={{ color: 'white', bg: 'green.500' }}
              _hover={{ bg: 'green.700' }}
            >
              Web Apps
            </Tab>
            <Tab
              color='gray.300'
              _selected={{ color: 'white', bg: 'green.500' }}
              _hover={{ bg: 'green.700' }}
            >
              Full Stack
            </Tab>
            <Tab
              color='gray.300'
              _selected={{ color: 'white', bg: 'green.500' }}
              _hover={{ bg: 'green.700' }}
            >
              Mobile
            </Tab>
          </TabList>

          <TabPanels>
            {/* All Projects */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='8'>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Featured Projects */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='8'>
                {getFeaturedProjects().map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Web Apps */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='8'>
                {getProjectsByCategory('web').map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Full Stack */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='8'>
                {getProjectsByCategory('fullstack').map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>

            {/* Mobile */}
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='8'>
                {getProjectsByCategory('mobile').map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
