import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Card,
} from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Barcha maydonlarni to'ldiring!");
      return;
    }
    login(email, password);
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 60px)' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 8 },
        px: 2,
        background: '#fff',
      }}
    >
      <Container maxWidth="xs">
        <Card
          sx={{
            p: { xs: 3, md: 5 },
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.08)',
            '&:hover': { transform: 'none' },
          }}
          className="fade-up"
        >
          <Typography variant="h3" sx={{ mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Kirish.
          </Typography>
          <Typography sx={{ color: '#86868b', fontSize: '1rem', mb: 4 }}>
            Hisobingizga kiring.
          </Typography>

          {error && (
            <Alert severity="error" className="fade-in" sx={{ mb: 3, borderRadius: 3 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2.5 }}
            />
            <TextField
              fullWidth
              label="Parol"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3.5 }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ py: 1.75, fontSize: '1.0625rem' }}
            >
              Kirish
            </Button>
          </Box>

          <Typography sx={{ textAlign: 'center', mt: 3.5, fontSize: '0.9375rem', color: '#86868b' }}>
            Hisobingiz yo'qmi?{' '}
            <Link
              to="/register"
              style={{ color: '#0071e3', textDecoration: 'none', fontWeight: 500 }}
            >
              Ro'yxatdan o'tish
            </Link>
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}