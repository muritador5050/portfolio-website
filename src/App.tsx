import { Box, Spinner, Flex, Text } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ProjectsSection = lazy(() =>
  import('./components/ProjectsSection').then((module) => ({
    default: module.ProjectsSection,
  }))
);

export const bgGradient =
  'linear(110deg, green.900 0%, black 15%, green.900 50%, black 85%)';

function App() {
  return (
    <Router>
      <Box>
        <Navbar />

        <Routes>
          <Route index path='/' element={<HeroSection />} />
          <Route path='about' element={<AboutSection />} />

          <Route
            path='projects'
            element={
              <Suspense
                fallback={
                  <Flex
                    justify='center'
                    align='center'
                    h='60vh'
                    direction='column'
                    gap={3}
                  >
                    <Spinner
                      thickness='4px'
                      speed='0.65s'
                      emptyColor='gray.200'
                      color='green.500'
                      size='xl'
                    />
                    <Text color='green.300' fontSize='lg' fontWeight='medium'>
                      Loading Projects...
                    </Text>
                  </Flex>
                }
              >
                <ProjectsSection />
              </Suspense>
            }
          />

          <Route path='contact' element={<ContactSection />} />
        </Routes>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
