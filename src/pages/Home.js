import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Chip,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import ExploreIcon from '@mui/icons-material/Explore';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop';

const TESTIMONIALS = [
  {
    name: 'Aziza Karimova',
    role: { uz: 'OTA-ONA', ru: 'РОДИТЕЛЬ', en: 'PARENT' },
    text: {
      uz: "Farzandim bu yerda juda ko'p narsani o'rgandi!",
      ru: 'Мой ребёнок здесь многому научился!',
      en: 'My child learned a lot here!',
    },
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Bobur Tolipov',
    role: { uz: "O'QUVCHI", ru: 'УЧЕНИК', en: 'STUDENT' },
    text: {
      uz: "Dasturlashni shu yerda o'rgandim!",
      ru: 'Здесь научился программировать!',
      en: 'Learned programming here!',
    },
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Nilufar Saidova',
    role: { uz: 'USTOZ', ru: 'УЧИТЕЛЬ', en: 'TEACHER' },
    text: {
      uz: "Ajoyib jamoa va ajoyib o'quvchilar!",
      ru: 'Отличная команда и ученики!',
      en: 'Great team and students!',
    },
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop&crop=faces',
  },
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'uz';

  const features = [
    {
      icon: <SchoolIcon />,
      title: t('nav.circles'),
      desc: t('sections.circles_desc'),
      color: '#0071e3',
      to: '/circles',
    },
    {
      icon: <ScienceIcon />,
      title: t('nav.sciences'),
      desc: t('sections.sciences_desc'),
      color: '#30d158',
      to: '/sciences',
    },
    {
      icon: <WorkIcon />,
      title: t('nav.professions'),
      desc: t('sections.professions_desc'),
      color: '#ff9f0a',
      to: '/professions',
    },
    {
      icon: <ExploreIcon />,
      title: t('nav.career'),
      desc: t('sections.career_desc'),
      color: '#5e5ce6',
      to: '/career',
    },
  ];

  return (
    <Box>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #f5f5f7 0%, #ffffff 100%)',
          pt: { xs: 4, sm: 6, md: 10 },
          pb: { xs: 5, sm: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 3, sm: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            {/* Matn */}
            <Box sx={{ order: { xs: 2, md: 1 } }}>
              <Chip
                label={
                  lang === 'ru'
                    ? 'Центр Будущего'
                    : lang === 'en'
                    ? 'Future Center'
                    : 'Kelajak Markazi'
                }
                size="small"
                sx={{
                  mb: { xs: 2, md: 3 },
                  background: 'rgba(0, 113, 227, 0.1)',
                  color: '#0071e3',
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  px: 1,
                }}
                className="fade-up"
              />
              <Typography
                variant="h1"
                className="fade-up fade-up-delay-1"
                sx={{
                  mb: { xs: 2, md: 3 },
                  fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
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
                  fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.125rem' },
                  mb: { xs: 3, md: 4 },
                  maxWidth: 520,
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'left' },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {t('hero.description')}
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 2 }}
                className="fade-up fade-up-delay-3"
                sx={{
                  alignItems: { xs: 'stretch', sm: 'center' },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  component={Link}
                  to="/circles"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                    textTransform: 'none',
                  }}
                >
                  {t('hero.cta')}
                </Button>
                <Button
                  component={Link}
                  to="/about"
                  size="large"
                  color="inherit"
                  sx={{
                    width: { xs: '100%', sm: 'auto' },
                    textTransform: 'none',
                  }}
                >
                  {t('hero.cta2')}
                </Button>
              </Stack>
            </Box>

            {/* Rasm */}
            <Box
              className="fade-in"
              sx={{ order: { xs: 1, md: 2 } }}
            >
              <Box
                component="img"
                src={HERO_IMAGE}
                alt="Kelajak Markazi"
                sx={{
                  width: '100%',
                  borderRadius: { xs: 3, md: 4 },
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
                  aspectRatio: { xs: '16/10', md: '4/3' },
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= 4 TA YO'NALISH — 2x2 GRID ================= */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, sm: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          {/* Sarlavha */}
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              className="fade-up"
              sx={{
                mb: 1.5,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              {lang === 'ru'
                ? 'Наши направления'
                : lang === 'en'
                ? 'Our directions'
                : "Bizning yo'nalishlar"}
            </Typography>
            <Typography
              className="fade-up fade-up-delay-1"
              sx={{
                color: '#86868b',
                maxWidth: 600,
                mx: 'auto',
                fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                px: { xs: 1, md: 0 },
                lineHeight: 1.6,
              }}
            >
              {lang === 'ru'
                ? 'Выберите то, что вам нравится'
                : lang === 'en'
                ? 'Choose what you like'
                : "O'zingizga yoqqanini tanlang"}
            </Typography>
          </Box>

          {/* 2x2 Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',              // 📱 Mobil: 1 ustun
                sm: 'repeat(2, 1fr)',   // 📱 Katta telefon: 2 ustun
                md: 'repeat(2, 1fr)',   // 💻 Desktop: 2 ustun (2x2)
              },
              gap: { xs: 2, sm: 2.5, md: 3 },
              alignItems: 'stretch',
            }}
          >
            {features.map((f, i) => (
              <Card
                key={i}
                component={Link}
                to={f.to}
                className={`fade-up fade-up-delay-${(i % 4) + 1}`}
                sx={{
                  textDecoration: 'none',
                  p: { xs: 3, sm: 3.5, md: 4 },
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: { xs: 2, md: 3 },
                  minHeight: { xs: 130, sm: 150, md: 160 },
                  height: '100%',
                  width: '100%',
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: { xs: 56, sm: 64, md: 72 },
                    height: { xs: 56, sm: 64, md: 72 },
                    borderRadius: 3,
                    background: `${f.color}15`,
                    color: f.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    '& svg': {
                      fontSize: { xs: 26, sm: 30, md: 34 },
                    },
                  }}
                >
                  {f.icon}
                </Box>

                {/* Matn */}
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    sx={{
                      mb: 0.5,
                      color: '#1d1d1f',
                      fontSize: { xs: '1.0625rem', sm: '1.15rem', md: '1.25rem' },
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#86868b',
                      lineHeight: 1.5,
                      fontSize: { xs: '0.8125rem', sm: '0.875rem', md: '0.9375rem' },
                    }}
                  >
                    {f.desc}
                  </Typography>
                </Box>

                {/* Strelka */}
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#f5f5f7',
                    color: '#1d1d1f',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                  className="feature-arrow"
                >
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= STATS ================= */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 4 },
            }}
          >
            {[
              { value: '2000+', label: t('stats.students') },
              { value: '25+', label: t('stats.circles') },
              { value: '50+', label: t('stats.teachers') },
              { value: '150+', label: t('stats.awards') },
            ].map((s, i) => (
              <Box
                key={i}
                className={`fade-up fade-up-delay-${i + 1}`}
                sx={{ textAlign: 'center' }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    mb: 0.75,
                    color: '#1d1d1f',
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    color: '#86868b',
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= TESTIMONIALS ================= */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, sm: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
            <Typography
              variant="h2"
              className="fade-up"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              {lang === 'ru' ? 'Отзывы' : lang === 'en' ? 'Testimonials' : 'Fikrlar'}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 2, md: 3 },
              alignItems: 'stretch',
            }}
          >
            {TESTIMONIALS.map((tm, i) => (
              <Card
                key={i}
                className={`fade-up fade-up-delay-${i + 1}`}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    color: '#ffb400',
                    mb: { xs: 1.5, md: 2.5 },
                    fontSize: { xs: '1rem', md: '1.25rem' },
                  }}
                >
                  ★★★★★
                </Box>
                <Typography
                  sx={{
                    color: '#1d1d1f',
                    fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                    lineHeight: 1.6,
                    mb: { xs: 2, md: 3 },
                    fontStyle: 'italic',
                    flexGrow: 1,
                  }}
                >
                  "{tm.text[lang] || tm.text.uz}"
                </Typography>
                <Stack
                  direction="row"
                  spacing={{ xs: 1.5, md: 2 }}
                  alignItems="center"
                  sx={{ mt: 'auto' }}
                >
                  <Box
                    component="img"
                    src={tm.avatar}
                    alt={tm.name}
                    sx={{
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {tm.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#86868b',
                        fontSize: { xs: '0.7rem', md: '0.8125rem' },
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {tm.role[lang] || tm.role.uz}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              borderRadius: { xs: 3, md: 5 },
              overflow: 'hidden',
              minHeight: { xs: 300, sm: 350, md: 440 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              px: { xs: 2.5, sm: 4, md: 6 },
              py: { xs: 4, sm: 6, md: 8 },
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80&auto=format&fit=crop)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
            }}
            className="fade-up"
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: 'white',
                  mb: { xs: 1.5, md: 2.5 },
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
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
                  fontSize: { xs: '0.9375rem', md: '1.125rem' },
                  mb: { xs: 2.5, md: 4 },
                  maxWidth: 500,
                  mx: 'auto',
                  lineHeight: 1.6,
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
                sx={{
                  px: { xs: 3, md: 5 },
                  py: { xs: 1.25, md: 1.75 },
                  textTransform: 'none',
                }}
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