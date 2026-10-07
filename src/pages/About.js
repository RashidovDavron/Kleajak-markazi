import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Avatar,
  Stack,
} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop';
const MISSION_IMAGE = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&auto=format&fit=crop';

const values = [
  { icon: <LightbulbIcon />, title: 'Innovatsiya', desc: "Har doim yangi texnologiyalarni qo'llaymiz" },
  { icon: <VerifiedUserIcon />, title: 'Ishonch', desc: 'Mijozlar bilan uzoq muddatli aloqalar' },
  { icon: <FavoriteIcon />, title: 'Sadoqat', desc: 'Har bir loyihaga jonimizni beramiz' },
  { icon: <RocketLaunchIcon />, title: 'Tezlik', desc: "Loyihalarni o'z vaqtida yetkazamiz" },
];

const team = [
  {
    name: 'Alisher Navoiy',
    role: 'Bosh direktor',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Zulfiya Karimova',
    role: 'Dizayner',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Bobur Rahmonov',
    role: 'Dasturchi',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    name: 'Malika Yusupova',
    role: 'Marketolog',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
];

export default function About() {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            Biz haqimizda.
          </Typography>
          <Typography
            variant="body1"
            className="fade-up fade-up-delay-1"
            sx={{
              color: '#86868b',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            Biz kelajakni bugun yaratamiz. Zamonaviy texnologiyalar va g'oyalar bilan.
          </Typography>
        </Container>
      </Box>

      {/* BIG IMAGE */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
        <Box
          component="img"
          src={ABOUT_IMAGE}
          alt="Team"
          className="fade-in"
          sx={{
            width: '100%',
            borderRadius: 4,
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.15)',
            aspectRatio: { xs: '16/10', md: '16/7' },
            objectFit: 'cover',
          }}
        />
      </Container>

      {/* STATS */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {[
              { value: '5+', label: 'Yillik tajriba' },
              { value: '120+', label: 'Loyihalar' },
              { value: '50+', label: 'Xodimlar' },
              { value: '99%', label: 'Mamnun mijozlar' },
            ].map((s, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Box
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography sx={{ color: '#86868b' }}>{s.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* MISSION */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className="fade-up" sx={{ mb: 3 }}>
                Missiyamiz.
              </Typography>
              <Typography
                className="fade-up fade-up-delay-1"
                sx={{
                  color: '#86868b',
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                O'zbekistonda IT sohasini rivojlantirish va zamonaviy texnologiyalarni
                keng targ'ib qilish.
              </Typography>
              <Typography
                className="fade-up fade-up-delay-2"
                sx={{ color: '#86868b', fontSize: '1.0625rem', lineHeight: 1.6, mb: 4 }}
              >
                Har bir loyihamizga mas'uliyat bilan yondashamiz va mijozlarimizning
                ishonchini oqlaymiz.
              </Typography>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                size="large"
                className="fade-up fade-up-delay-3"
              >
                Xizmatlarimiz
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={MISSION_IMAGE}
                alt="Mission"
                className="fade-in"
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

      {/* VALUES */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" className="fade-up" sx={{ mb: 2 }}>
              Qadriyatlarimiz.
            </Typography>
            <Typography
              className="fade-up fade-up-delay-1"
              sx={{ color: '#86868b', fontSize: '1.125rem' }}
            >
              Bizni harakatlantiruvchi kuch.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {values.map((v, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 3,
                      background: 'rgba(0, 113, 227, 0.1)',
                      color: '#0071e3',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5,
                      '& svg': { fontSize: 28 },
                    }}
                  >
                    {v.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#86868b' }}>
                    {v.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TEAM */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography variant="h2" className="fade-up" sx={{ mb: 2 }}>
              Jamoamiz.
            </Typography>
            <Typography
              className="fade-up fade-up-delay-1"
              sx={{ color: '#86868b', fontSize: '1.125rem' }}
            >
              Professional va do'stona jamoa.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {team.map((t, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Card
                  className={`fade-up fade-up-delay-${i + 1}`}
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                  }}
                >
                  <Avatar
                    src={t.avatar}
                    alt={t.name}
                    sx={{
                      width: { xs: 90, md: 120 },
                      height: { xs: 90, md: 120 },
                      mx: 'auto',
                      mb: 2.5,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography sx={{ color: '#0071e3', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                    {t.role}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ background: '#1d1d1f', color: 'white', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            className="fade-up"
            sx={{ color: 'white', mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Birga ishlaymizmi?
          </Typography>
          <Typography
            className="fade-up fade-up-delay-1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: { xs: '1.0625rem', md: '1.25rem' },
              mb: 4,
            }}
          >
            Loyihangiz haqida gaplashamiz.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            className="fade-up fade-up-delay-2"
            sx={{ px: 5, py: 1.75 }}
          >
            Bog'lanish
          </Button>
        </Container>
      </Box>
    </Box>
  );
}