import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { professions } from '../data/professions';
import { Link } from 'react-router-dom';

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
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            {t('sections.professions_title')}
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
            {t('sections.professions_desc')}
          </Typography>
        </Container>
      </Box>

      {/* GRID */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {professions.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  sx={{ height: '100%', overflow: 'hidden' }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={p.image}
                    alt={p.name[lang]}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
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
                          '& .MuiChip-icon': {
                            color: p.demand === 'high' ? '#30d158' : '#ff9f0a',
                          },
                        }}
                      />
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        mb: 1,
                      }}
                    >
                      {p.name[lang] || p.name.uz}
                    </Typography>
                    <Typography
                      sx={{ color: '#86868b', fontSize: '0.9375rem', mb: 2.5, lineHeight: 1.5 }}
                    >
                      {p.desc[lang] || p.desc.uz}
                    </Typography>

                    {/* SKILLS */}
                    <Stack direction="row" spacing={0.5} sx={{ mb: 3, flexWrap: 'wrap', gap: 0.5 }}>
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
                      sx={{ pt: 2, borderTop: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      <Box>
                        <Typography sx={{ fontSize: '0.75rem', color: '#86868b' }}>
                          {lang === 'ru' ? 'Зарплата' : lang === 'en' ? 'Salary' : 'Maosh'}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '0.9375rem', fontWeight: 600, color: '#0071e3' }}
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}