import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

const socials = [
  { icon: <FacebookIcon />, color: '#1877f2' },
  { icon: <InstagramIcon />, color: '#e4405f' },
  { icon: <SendIcon />, color: '#0088cc' },
  { icon: <YouTubeIcon />, color: '#ff0000' },
  { icon: <LinkedInIcon />, color: '#0077b5' },
];

export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      title: t('footer.pages'),
      links: [
        { to: '/', label: t('nav.home') },
        { to: '/about', label: t('nav.about') },
        { to: '/contact', label: t('nav.contact') },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { to: '/circles', label: t('nav.circles') },
        { to: '/sciences', label: t('nav.sciences') },
        { to: '/professions', label: t('nav.professions') },
        { to: '/career', label: t('nav.career') },
      ],
    },
    {
      title: t('footer.account'),
      links: [
        { to: '/news', label: t('nav.news') },
        { to: '/leadership', label: t('nav.leadership') },
        { to: '/login', label: t('nav.login') },
        { to: '/register', label: t('nav.register') },
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: '#f5f5f7',
        pt: { xs: 6, md: 8 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: '#86868b',
            lineHeight: 1.6,
            pb: 2.5,
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            mb: 4,
          }}
        >
          <Box component="span" sx={{ fontWeight: 600, color: '#1d1d1f' }}>
            {t('footer.note')}:
          </Box>{' '}
          {t('footer.note_text')}
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 4 }}>
          {columns.map((col, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#1d1d1f',
                  mb: 2,
                }}
              >
                {col.title}
              </Typography>
              <Stack spacing={1.25}>
                {col.links.map((link, j) => (
                  <Typography
                    key={j}
                    component={Link}
                    to={link.to}
                    sx={{
                      fontSize: '0.8125rem',
                      color: '#86868b',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#1d1d1f' },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#1d1d1f', mb: 2 }}
            >
              {t('footer.contact')}
            </Typography>
            <Stack spacing={1.25}>
              <Typography sx={{ fontSize: '0.8125rem', color: '#86868b' }}>
                +998 71 200 00 00
              </Typography>
              <Typography sx={{ fontSize: '0.8125rem', color: '#86868b' }}>
                info@kelajakmarkazi.uz
              </Typography>
              <Typography sx={{ fontSize: '0.8125rem', color: '#86868b' }}>
                Toshkent, Uzbekistan
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ fontSize: '0.875rem', fontWeight: 600, color: '#1d1d1f', mb: 2 }}
            >
              {t('footer.subscribe')}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2.5 }}>
              <TextField
                placeholder={t('footer.subscribe_placeholder')}
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': { background: 'white' },
                }}
              />
              <Button variant="contained" sx={{ minWidth: 48, px: 2 }}>
                <SendIcon sx={{ fontSize: 18 }} />
              </Button>
            </Stack>

            <Stack direction="row" spacing={0.75} flexWrap="wrap">
              {socials.map((s, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    width: 36,
                    height: 36,
                    background: 'rgba(0,0,0,0.05)',
                    color: '#1d1d1f',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: s.color,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    '& svg': { fontSize: 16 },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: 1.5,
                background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <SchoolIcon sx={{ fontSize: 16 }} />
            </Box>
            <Typography sx={{ fontSize: '0.8125rem', color: '#86868b' }}>
              © {new Date().getFullYear()} Kelajak Markazi. {t('footer.rights')}.
            </Typography>
          </Box>

          <Stack direction="row" spacing={2.5}>
            {[t('footer.privacy'), t('footer.terms'), t('footer.sitemap')].map((label, i) => (
              <Typography
                key={i}
                component="a"
                href="#"
                sx={{
                  fontSize: '0.8125rem',
                  color: '#86868b',
                  textDecoration: 'none',
                  '&:hover': { color: '#1d1d1f' },
                }}
              >
                {label}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}