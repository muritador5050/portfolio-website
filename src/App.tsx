import { ChakraProvider, Box } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const bgGradient =
  'linear(110deg, green.900 0%, black 15%, green.900 50%,  black 85%, )';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
