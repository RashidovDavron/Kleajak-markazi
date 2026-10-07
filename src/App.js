import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './i18n';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Circles from './pages/Circles';
import Sciences from './pages/Sciences';
import Professions from './pages/Professions';
import Career from './pages/Career';
import News from './pages/News';
import Leadership from './pages/Leadership';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            background: '#fff',
            // BottomNav uchun pastda joy
            pb: { xs: 0, lg: 0 },
          }}
        >
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/circles" element={<Circles />} />
              <Route path="/sciences" element={<Sciences />} />
              <Route path="/professions" element={<Professions />} />
              <Route path="/career" element={<Career />} />
              <Route path="/news" element={<News />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
          <BottomNav />
        </Box>
      </BrowserRouter>
    </AuthProvider>
  );
}