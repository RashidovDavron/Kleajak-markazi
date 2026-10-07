import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const newsList = [
  {
    id: 1,
    title: 'Yangi loyiha ishga tushdi',
    date: '15 Yanvar 2025',
    category: 'Texnologiya',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Xalqaro konferensiya',
    date: '10 Yanvar 2025',
    category: 'Tadbir',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Yangi hamkorlar',
    date: '5 Yanvar 2025',
    category: 'Hamkorlik',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'IT kurslari boshlandi',
    date: '28 Dekabr 2024',
    category: "Ta'lim",
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    title: "Startap g'oyasi",
    date: '20 Dekabr 2024',
    category: 'Startap',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Yillik hisobot',
    date: '15 Dekabr 2024',
    category: 'Hisobot',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  },
];

export default function News() {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            Yangiliklar.
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
            Eng so'nggi yangiliklar va e'lonlar.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {newsList.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  sx={{ height: '100%', overflow: 'hidden' }}
                >
                  <CardActionArea sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Chip
                          label={item.category}
                          size="small"
                          sx={{
                            background: 'rgba(0, 113, 227, 0.1)',
                            color: '#0071e3',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                        <Typography sx={{ color: '#86868b', fontSize: '0.8rem' }}>
                          {item.date}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ mb: 2, fontWeight: 600, letterSpacing: '-0.02em' }}
                      >
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#0071e3',
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                        }}
                      >
                        Batafsil <ArrowForwardIcon sx={{ fontSize: 18, ml: 0.5 }} />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}