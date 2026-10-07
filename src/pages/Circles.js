import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import { circles, circleCategories } from '../data/circles';

export default function Circles() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const lang = i18n.language?.slice(0, 2) || 'uz';

  const filtered =
    filter === 'all' ? circles : circles.filter((c) => c.category === filter);

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 5, sm: 7, md: 12 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            className="fade-up"
            sx={{
              mb: { xs: 1.5, md: 3 },
              fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            {t('sections.circles_title')}
          </Typography>
          <Typography
            className="fade-up fade-up-delay-1"
            sx={{
              color: '#86868b',
              fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.25rem' },
              maxWidth: 680,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {t('sections.circles_desc')}
          </Typography>
        </Container>
      </Box>

      {/* FILTERS */}
      <Container
        maxWidth="lg"
        sx={{ mb: { xs: 3, md: 4 }, px: { xs: 2, sm: 3 } }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {circleCategories.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.name[lang] || cat.name.uz}
              onClick={() => setFilter(cat.id)}
              sx={{
                background: filter === cat.id ? '#0071e3' : '#f5f5f7',
                color: filter === cat.id ? 'white' : '#1d1d1f',
                fontWeight: 500,
                px: { xs: 1.5, md: 2 },
                py: { xs: 2, md: 2.5 },
                fontSize: { xs: '0.8125rem', md: '0.9375rem' },
                flexShrink: 0,
                '&:hover': {
                  background: filter === cat.id ? '#0071e3' : '#e8e8ed',
                },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* GRID */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 5, sm: 6, md: 10 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 2, sm: 2.5, md: 3 },
              alignItems: 'stretch',
            }}
          >
            {filtered.map((c, i) => (
              <Card
                key={c.id}
                className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  minHeight: { xs: 400, sm: 420, md: 440 },
                }}
              >
                <CardMedia
                  component="img"
                  image={c.image}
                  alt={c.name[lang] || c.name.uz}
                  sx={{
                    objectFit: 'cover',
                    height: { xs: 160, sm: 180, md: 200 },
                    flexShrink: 0,
                  }}
                />
                <CardContent
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    '&:last-child': { pb: { xs: 2.5, sm: 3 } },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mb: 2, flexWrap: 'wrap', gap: 0.5 }}
                  >
                    <Chip
                      label={`${c.age} yosh`}
                      size="small"
                      sx={{
                        background: 'rgba(0, 113, 227, 0.1)',
                        color: '#0071e3',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        height: 24,
                      }}
                    />
                    <Chip
                      label={c.duration}
                      size="small"
                      sx={{
                        background: '#f5f5f7',
                        color: '#1d1d1f',
                        fontSize: '0.7rem',
                        height: 24,
                      }}
                    />
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: { xs: '1.15rem', md: '1.25rem' },
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      mb: 1,
                      color: '#1d1d1f',
                      lineHeight: 1.2,
                    }}
                  >
                    {c.name[lang] || c.name.uz}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#86868b',
                      fontSize: { xs: '0.875rem', md: '0.9375rem' },
                      mb: 2.5,
                      lineHeight: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    {c.desc[lang] || c.desc.uz}
                  </Typography>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                      pt: 2,
                      borderTop: '1px solid rgba(0,0,0,0.06)',
                      mt: 'auto',
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: '0.7rem', color: '#86868b' }}>
                        {lang === 'ru'
                          ? 'Цена'
                          : lang === 'en'
                          ? 'Price'
                          : 'Narxi'}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          fontWeight: 600,
                        }}
                      >
                        {c.price} so'm
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      to="/register"
                      variant="contained"
                      size="small"
                      sx={{
                        px: 2.5,
                        py: 0.75,
                        fontSize: '0.8125rem',
                        textTransform: 'none',
                      }}
                    >
                      {t('buttons.register')}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}