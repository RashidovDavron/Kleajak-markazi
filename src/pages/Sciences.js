import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';

import { sciences } from '../data/sciences';

export default function Sciences() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'uz';

  return (
    <Box>
      {/* HERO */}
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            {t('sections.sciences_title')}
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
            {t('sections.sciences_desc')}
          </Typography>
        </Container>
      </Box>

      {/* GRID */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {sciences.map((s, i) => (
              <Grid item xs={12} sm={6} md={4} key={s.id}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  sx={{ p: { xs: 3, md: 4 }, height: '100%' }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 4,
                      background: `${s.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      mb: 3,
                    }}
                  >
                    {s.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      mb: 1.5,
                      color: '#1d1d1f',
                    }}
                  >
                    {s.name[lang] || s.name.uz}
                  </Typography>
                  <Typography
                    sx={{ color: '#86868b', fontSize: '1rem', mb: 3, lineHeight: 1.6 }}
                  >
                    {s.desc[lang] || s.desc.uz}
                  </Typography>
                  <Button
                    component={Link}
                    to="/contact"
                    sx={{
                      color: s.color,
                      p: 0,
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      '&:hover': {
                        background: 'transparent',
                        textDecoration: 'underline',
                        transform: 'none',
                      },
                    }}
                  >
                    {t('buttons.more')} →
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}