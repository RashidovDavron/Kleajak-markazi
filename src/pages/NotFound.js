import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 60px)' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center' }} className="fade-up">
          <Typography
            sx={{
              fontSize: { xs: '6rem', md: '11rem' },
              fontWeight: 700,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              color: '#f5f5f7',
            }}
          >
            404
          </Typography>
          <Typography variant="h2" sx={{ mt: 2, mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            Sahifa topilmadi.
          </Typography>
          <Typography sx={{ color: '#86868b', fontSize: '1.0625rem', mb: 4 }}>
            Siz izlagan sahifa mavjud emas yoki ko'chirilgan.
          </Typography>
          <Button component={Link} to="/" variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
            Bosh sahifaga qaytish
          </Button>
        </Box>
      </Container>
    </Box>
  );
}