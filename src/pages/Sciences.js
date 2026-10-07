import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Card, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { sciences } from '../data/sciences';

export default function Sciences() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'uz';

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
            {t('sections.sciences_title')}
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
            {t('sections.sciences_desc')}
          </Typography>
        </Container>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          background: '#f5f5f7',
          py: { xs: 5, sm: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',              // 📱 Mobil (0-599): 1 ustun
                sm: '1fr',              // 📱 Katta telefon (600-767): 1 ustun
                md: 'repeat(2, 1fr)',   // 📱 Planshet (768-1023): 2 ustun
                lg: 'repeat(3, 1fr)',   // 💻 Desktop (1024+): 3 ustun
              },
              gap: { xs: 2, sm: 2.5, md: 3 },
              alignItems: 'stretch',
            }}
          >
            {sciences.map((s, i) => (
              <Card
                key={s.id}
                className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                sx={{
                  p: { xs: 2.5, sm: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { xs: 220, sm: 260, md: 300 },
                  height: '100%',
                  width: '100%',
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    width: { xs: 56, sm: 64, md: 72 },
                    height: { xs: 56, sm: 64, md: 72 },
                    borderRadius: 3,
                    background: s.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                    mb: { xs: 2, md: 2.5 },
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </Box>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    mb: 1,
                    color: '#1d1d1f',
                    lineHeight: 1.2,
                  }}
                >
                  {s.name[lang] || s.name.uz}
                </Typography>

                {/* DESC */}
                <Typography
                  sx={{
                    color: '#86868b',
                    fontSize: { xs: '0.875rem', sm: '0.9rem', md: '0.9375rem' },
                    lineHeight: 1.5,
                    mb: { xs: 2, md: 2.5 },
                    flexGrow: 1,
                  }}
                >
                  {s.desc[lang] || s.desc.uz}
                </Typography>

                {/* BUTTON */}
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    component={Link}
                    to="/contact"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      color: s.color,
                      p: 0,
                      fontSize: { xs: '0.875rem', md: '0.9375rem' },
                      fontWeight: 500,
                      textTransform: 'none',
                      minHeight: 'auto',
                      minWidth: 'auto',
                      '&:hover': {
                        background: 'transparent',
                        textDecoration: 'underline',
                        transform: 'none',
                        boxShadow: 'none',
                      },
                      '& .MuiButton-endIcon': {
                        transition: 'transform 0.2s',
                      },
                      '&:hover .MuiButton-endIcon': {
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {t('buttons.more')}
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}