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
  Stack,
  Button,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { professions } from '../data/professions';

export default function Professions() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'uz';

  const demandLabel = (d) => {
    if (lang === 'ru') return d === 'high' ? 'Высокий спрос' : 'Средний спрос';
    if (lang === 'en') return d === 'high' ? 'High demand' : 'Medium demand';
    return d === 'high' ? 'Yuqori talab' : "O'rtacha talab";
  };

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
            {t('sections.professions_title')}
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
            {t('sections.professions_desc')}
          </Typography>
        </Container>
      </Box>

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
            {professions.map((p, i) => (
              <Card
                key={p.id}
                className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  minHeight: { xs: 440, sm: 460, md: 480 },
                }}
              >
                <CardMedia
                  component="img"
                  image={p.image}
                  alt={p.name[lang] || p.name.uz}
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
                    sx={{ mb: 2, flexWrap: 'wrap' }}
                  >
                    <Chip
                      icon={<TrendingUpIcon sx={{ fontSize: 14 }} />}
                      label={demandLabel(p.demand)}
                      size="small"
                      sx={{
                        background:
                          p.demand === 'high'
                            ? 'rgba(48, 209, 88, 0.12)'
                            : 'rgba(255, 159, 10, 0.12)',
                        color: p.demand === 'high' ? '#30d158' : '#ff9f0a',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        height: 24,
                        '& .MuiChip-icon': {
                          color: p.demand === 'high' ? '#30d158' : '#ff9f0a',
                        },
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
                    {p.name[lang] || p.name.uz}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#86868b',
                      fontSize: { xs: '0.875rem', md: '0.9375rem' },
                      mb: 2,
                      lineHeight: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    {p.desc[lang] || p.desc.uz}
                  </Typography>

                  {/* SKILLS */}
                  <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{ mb: 3, flexWrap: 'wrap', gap: 0.5 }}
                  >
                    {p.skills.slice(0, 3).map((skill, j) => (
                      <Chip
                        key={j}
                        label={skill}
                        size="small"
                        sx={{
                          background: '#f5f5f7',
                          fontSize: '0.7rem',
                          height: 22,
                        }}
                      />
                    ))}
                  </Stack>

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
                          ? 'Зарплата'
                          : lang === 'en'
                          ? 'Salary'
                          : 'Maosh'}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '0.875rem', md: '0.9375rem' },
                          fontWeight: 600,
                          color: '#0071e3',
                        }}
                      >
                        {p.salary}
                      </Typography>
                    </Box>
                    <Button
                      component={Link}
                      to="/career"
                      size="small"
                      sx={{
                        color: '#0071e3',
                        fontWeight: 500,
                        fontSize: '0.8125rem',
                        minHeight: 'auto',
                        minWidth: 'auto',
                        p: 0.5,
                        textTransform: 'none',
                        '&:hover': {
                          background: 'transparent',
                          textDecoration: 'underline',
                          transform: 'none',
                        },
                      }}
                    >
                      {t('buttons.more')} →
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