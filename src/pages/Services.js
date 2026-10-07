import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const services = [
  {
    title: 'Web Development',
    desc: 'Zamonaviy va tezkor web saytlar',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Mobile Apps',
    desc: 'iOS va Android ilovalari',
    price: '$1499',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'UI/UX Design',
    desc: 'Chiroyli va qulay interfeys',
    price: '$699',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Cloud Solutions',
    desc: 'Bulutli yechimlar',
    price: '$1299',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'SEO Marketing',
    desc: "Google da yuqori o'rin",
    price: '$499',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Cybersecurity',
    desc: "Ma'lumotlar xavfsizligi",
    price: '$899',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80&auto=format&fit=crop',
  },
];

const process = [
  { step: '01', title: 'Tahlil', desc: "Talablaringizni o'rganamiz" },
  { step: '02', title: 'Rejalashtirish', desc: 'Loyiha rejasini tuzamiz' },
  { step: '03', title: 'Dizayn', desc: 'Chiroyli interfeys' },
  { step: '04', title: 'Ishlab chiqish', desc: 'Kod yozamiz va test qilamiz' },
  { step: '05', title: 'Ishga tushirish', desc: 'Loyihani topshiramiz' },
  { step: '06', title: "Qo'llab-quvvatlash", desc: "Doimiy xizmat ko'rsatamiz" },
];

const faqs = [
  { q: 'Loyiha qancha vaqt oladi?', a: 'Oddiy sayt 2-4 hafta, murakkab loyihalar 2-6 oy.' },
  { q: "To'lov qanday amalga oshiriladi?", a: '50% oldindan, 50% loyiha tugagandan keyin.' },
  { q: 'Kafolat bormi?', a: "Ha, har bir loyihaga 6 oylik bepul qo'llab-quvvatlash." },
  { q: "O'zgartirish kiritsam bo'ladimi?", a: "Ha, kichik o'zgartirishlar bepul." },
];

export default function Services() {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            Xizmatlar.
          </Typography>
          <Typography
            className="fade-up fade-up-delay-1"
            sx={{
              color: '#86868b',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            Biznesingiz uchun zamonaviy IT yechimlar.
          </Typography>
        </Container>
      </Box>

      {/* SERVICES GRID */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {services.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  sx={{ height: '100%', overflow: 'hidden' }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={s.image}
                    alt={s.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 1, fontWeight: 600, letterSpacing: '-0.02em' }}
                    >
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#86868b', mb: 3 }}>
                      {s.desc}
                    </Typography>
                    <Divider sx={{ mb: 2.5 }} />
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#86868b', mb: 0.5 }}>
                          Boshlanadi
                        </Typography>
                        <Typography
                          sx={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.02em' }}
                        >
                          {s.price}
                        </Typography>
                      </Box>
                      <Button
                        component={Link}
                        to="/contact"
                        size="small"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        sx={{ color: '#0071e3' }}
                      >
                        Buyurtma
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROCESS */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" className="fade-up" sx={{ mb: 2 }}>
              Jarayon.
            </Typography>
            <Typography
              className="fade-up fade-up-delay-1"
              sx={{ color: '#86868b', fontSize: '1.125rem' }}
            >
              Qanday ishlaymiz.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {process.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  sx={{ p: { xs: 3, md: 4 }, position: 'relative', height: '100%' }}
                >
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 24,
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      fontWeight: 700,
                      color: 'rgba(0,0,0,0.05)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {p.step}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 1, mt: 1.5 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#86868b' }}>
                    {p.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid item xs={12} md={5}>
              <Typography variant="h2" className="fade-up" sx={{ mb: 3 }}>
                Savollar.
              </Typography>
              <Typography
                className="fade-up fade-up-delay-1"
                sx={{ color: '#86868b', fontSize: '1.125rem', mb: 3 }}
              >
                Javob topa olmadingizmi? Bizga yozing.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                className="fade-up fade-up-delay-2"
              >
                Savol berish
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              {faqs.map((f, i) => (
                <Accordion
                  key={i}
                  disableGutters
                  elevation={0}
                  sx={{
                    background: 'transparent',
                    '&::before': { display: 'none' },
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#1d1d1f' }} />}
                    sx={{ px: 0, py: 1.5 }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1.0625rem', md: '1.25rem' },
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {f.q}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 0, pb: 2.5 }}>
                    <Typography sx={{ color: '#86868b', fontSize: '1.0625rem', lineHeight: 1.6 }}>
                      {f.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}