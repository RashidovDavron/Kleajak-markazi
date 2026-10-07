import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  TextField,
  Alert,
  Stack,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    title: 'Manzil',
    value: "Toshkent sh., Amir Temur ko'chasi 108",
  },
  { icon: <PhoneIcon />, title: 'Telefon', value: '+998 90 123 45 67' },
  { icon: <EmailIcon />, title: 'Email', value: 'info@mywebsite.uz' },
  { icon: <AccessTimeIcon />, title: 'Ish vaqti', value: 'Du-Ju: 9:00 - 18:00' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Barcha majburiy maydonlarni to'ldiring!");
      return;
    }
    setError('');
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Box>
      {/* HERO */}
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            Bog'lanish.
          </Typography>
          <Typography
            className="fade-up fade-up-delay-1"
            sx={{
              color: '#86868b',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              maxWidth: 620,
              mx: 'auto',
            }}
          >
            Savolingiz bormi? Bizga yozing.
          </Typography>
        </Container>
      </Box>

      {/* CONTACT INFO */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {contactInfo.map((c, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{ textAlign: 'center', p: { xs: 3, md: 3.5 }, height: '100%' }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      background: 'rgba(0, 113, 227, 0.1)',
                      color: '#0071e3',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      '& svg': { fontSize: 26 },
                    }}
                  >
                    {c.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 0.5, fontSize: '1.0625rem' }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ color: '#86868b', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {c.value}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FORM */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Card
            className="fade-up"
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.08)',
              '&:hover': { transform: 'none' },
            }}
          >
            <Typography variant="h3" sx={{ mb: 1, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Xabar yuboring.
            </Typography>
            <Typography sx={{ color: '#86868b', fontSize: '1.0625rem', mb: 4 }}>
              Formani to'ldiring, biz tez orada javob beramiz.
            </Typography>

            {sent && (
              <Alert
                severity="success"
                className="fade-in"
                sx={{ mb: 3, borderRadius: 3, fontSize: '1rem' }}
              >
                Xabaringiz yuborildi! Tez orada javob beramiz.
              </Alert>
            )}

            {error && (
              <Alert
                severity="error"
                className="fade-in"
                sx={{ mb: 3, borderRadius: 3, fontSize: '1rem' }}
              >
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Ismingiz *"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email *"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mavzu"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Xabar *"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    sx={{ py: 1.75, fontSize: '1.0625rem' }}
                  >
                    Xabar yuborish
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}