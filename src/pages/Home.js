import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import ExploreIcon from '@mui/icons-material/Explore';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=80&auto=format&fit=crop';

const TESTIMONIALS = [
  {
    name: 'Aziza Karimova',
    role: 'OTA-ONA',
    text: { uz: "Farzandim bu yerda juda ko'p narsani o'rgandi!", ru: 'Мой ребёнок здесь многому научился!', en: 'My child learned a lot here!' },
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Bobur Tolipov',
    role: "O'QUVCHI",
    text: { uz: "Dasturlashni shu yerda o'rgandim, endi ishlayapman!", ru: 'Здесь научился программировать, теперь работаю!', en: 'Learned programming here, now I work!' },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Nilufar Saidova',
    role: 'USTOZ',
    text: { uz: "Ajoyib jamoa va ajoyib o'quvchilar!", ru: 'Отличная команда и ученики!', en: 'Great team and students!' },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop&crop=faces',
  },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'uz';

  const features = [
    { icon: <SchoolIcon />, title: t('nav.circles'), desc: t('sections.circles_desc'), color: '#0071e3', to: '/circles' },
    { icon: <ScienceIcon />, title: t('nav.sciences'), desc: t('sections.sciences_desc'), color: '#30d158', to: '/sciences' },
    { icon: <WorkIcon />, title: t('nav.professions'), desc: t('sections.professions_desc'), color: '#ff9f0a', to: '/professions' },
    { icon: <ExploreIcon />, title: t('nav.career'), desc: t('sections.career_desc'), color: '#5e5ce6', to: '/career' },
  ];

  return (
    <Box>
      {/* ============ HERO ============ */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)',
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label={lang === 'ru' ? 'Центр Будущего' : lang === 'en' ? 'Future Center' : 'Kelajak Markazi'}
                size="small"
                sx={{
                  mb: 3,
                  background: 'rgba(0, 113, 227, 0.1)',
                  color: '#0071e3',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  px: 1,
                }}
                className="fade-up"
              />
              <Typography
                variant="h1"
                className="fade-up fade-up-delay-1"
                sx={{ mb: 3, fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4rem' } }}
              >
                {t('hero.title')}
                <br />
                <Box component="span" sx={{ color: '#86868b' }}>
                  {t('hero.subtitle')}
                </Box>
              </Typography>
              <Typography
                className="fade-up fade-up-delay-2"
                sx={{
                  color: '#86868b',
                  fontSize: { xs: '1.0625rem', md: '1.25rem' },
                  mb: 4,
                  maxWidth: 520,
                  lineHeight: 1.6,
                }}
              >
                {t('hero.description')}
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                className="fade-up fade-up-delay-3"
              >
                <Button
                  component={Link}
                  to="/circles"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  {t('hero.cta')}
                </Button>
                <Button component={Link} to="/about" size="large" color="inherit">
                  {t('hero.cta2')}
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} className="fade-in">
              <Box
                component="img"
                src={HERO_IMAGE}
                alt="Kelajak Markazi"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.15)',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ============ 4 TA ASOSIY YO'NALISH ============ */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" className="fade-up" sx={{ mb: 2 }}>
              {lang === 'ru' ? 'Наши направления' : lang === 'en' ? 'Our directions' : "Bizning yo'nalishlar"}
            </Typography>
            <Typography
              className="fade-up fade-up-delay-1"
              sx={{ color: '#86868b', maxWidth: 600, mx: 'auto', fontSize: '1.125rem' }}
            >
              {lang === 'ru'
                ? 'Выберите то, что вам нравится'
                : lang === 'en'
                ? 'Choose what you like'
                : "O'zingizga yoqqanini tanlang"}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {features.map((f, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  component={Link}
                  to={f.to}
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 3.5,
                      background: `${f.color}15`,
                      color: f.color,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5,
                      '& svg': { fontSize: 32 },
                    }}
                  >
                    {f.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, color: '#1d1d1f' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#86868b', lineHeight: 1.5 }}>
                    {f.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ STATS ============ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {[
              { value: '2000+', label: t('stats.students') },
              { value: '25+', label: t('stats.circles') },
              { value: '50+', label: t('stats.teachers') },
              { value: '150+', label: t('stats.awards') },
            ].map((s, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '2.25rem', md: '3.5rem' },
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography sx={{ color: '#86868b', fontSize: '1rem' }}>
                    {s.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ TESTIMONIALS ============ */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" className="fade-up">
              {lang === 'ru' ? 'Отзывы' : lang === 'en' ? 'Testimonials' : 'Fikrlar'}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {TESTIMONIALS.map((tm, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{ p: { xs: 3, md: 4 }, height: '100%' }}
                >
                  <Box sx={{ color: '#ffb400', mb: 2.5, fontSize: '1.25rem' }}>★★★★★</Box>
                  <Typography
                    sx={{
                      color: '#1d1d1f',
                      fontSize: '1.0625rem',
                      lineHeight: 1.6,
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    "{tm.text[lang] || tm.text.uz}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={tm.avatar}
                      alt={tm.name}
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
                        {tm.name}
                      </Typography>
                      <Typography sx={{ color: '#86868b', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {tm.role}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ============ CTA ============ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box
            sx={{
              borderRadius: 5,
              overflow: 'hidden',
              minHeight: { xs: 380, md: 440 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 8 },
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80&auto=format&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
            }}
            className="fade-up"
          >
            <Box>
              <Typography
                variant="h2"
                sx={{ color: 'white', mb: 2.5, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
              >
                {lang === 'ru'
                  ? 'Готовы начать?'
                  : lang === 'en'
                  ? 'Ready to start?'
                  : 'Boshlashga tayyormisiz?'}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: { xs: '1.0625rem', md: '1.25rem' },
                  mb: 4,
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                {lang === 'ru'
                  ? 'Запишитесь сегодня и начните учиться!'
                  : lang === 'en'
                  ? 'Enroll today and start learning!'
                  : "Bugun ro'yxatdan o'ting va o'rganishni boshlang!"}
              </Typography>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="large"
                sx={{ px: 5, py: 1.75 }}
              >
                {t('nav.register')}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}