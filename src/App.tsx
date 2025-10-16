import { ChakraProvider, Box } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export const bgGradient =
  'linear(110deg, green.900 0%, black 15%, green.900 50%, black 85%)';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box>
          <Navbar />
          <Routes>
            <Route index path='/' element={<HeroSection />} />
            <Route path='about' element={<AboutSection />} />
            <Route path='projects' element={<ProjectsSection />} />
            <Route path='contact' element={<ContactSection />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
