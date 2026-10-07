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
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Typography
          sx={{
            fontSize: { xs: '0.75rem', md: '0.875rem' },
            color: '#86868b',
            lineHeight: 1.6,
            pb: { xs: 2, md: 2.5 },
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            mb: { xs: 3, md: 4 },
          }}
        >
          <Box component="span" sx={{ fontWeight: 600, color: '#1d1d1f' }}>
            {t('footer.note')}:
          </Box>{' '}
          {t('footer.note_text')}
        </Typography>

        <Grid container spacing={{ xs: 3, sm: 3, md: 4 }} sx={{ mb: { xs: 3, md: 4 } }}>
          {columns.map((col, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <Typography
                sx={{
                  fontSize: { xs: '0.8125rem', md: '0.875rem' },
                  fontWeight: 600,
                  color: '#1d1d1f',
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                {col.title}
              </Typography>
              <Stack spacing={{ xs: 0.75, md: 1.25 }}>
                {col.links.map((link, j) => (
                  <Typography
                    key={j}
                    component={Link}
                    to={link.to}
                    sx={{
                      fontSize: { xs: '0.75rem', md: '0.8125rem' },
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

          <Grid item xs={12} sm={4} md={3}>
            <Typography
              sx={{
                fontSize: { xs: '0.8125rem', md: '0.875rem' },
                fontWeight: 600,
                color: '#1d1d1f',
                mb: { xs: 1.5, md: 2 },
              }}
            >
              {t('footer.contact')}
            </Typography>
            <Stack spacing={{ xs: 0.75, md: 1.25 }}>
              <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.8125rem' }, color: '#86868b' }}>
                +998 71 200 00 00
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.8125rem' }, color: '#86868b' }}>
                info@kelajakmarkazi.uz
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.8125rem' }, color: '#86868b' }}>
                Toshkent, Uzbekistan
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Typography
              sx={{
                fontSize: { xs: '0.8125rem', md: '0.875rem' },
                fontWeight: 600,
                color: '#1d1d1f',
                mb: { xs: 1.5, md: 2 },
              }}
            >
              {t('footer.subscribe')}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: { xs: 2, md: 2.5 } }}>
              <TextField
                placeholder={t('footer.subscribe_placeholder')}
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    background: 'white',
                    fontSize: '14px',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{ minWidth: { xs: 44, md: 48 }, px: { xs: 1.5, md: 2 } }}
              >
                <SendIcon sx={{ fontSize: 18 }} />
              </Button>
            </Stack>

            <Stack direction="row" spacing={0.75} flexWrap="wrap">
              {socials.map((s, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    width: { xs: 32, md: 36 },
                    height: { xs: 32, md: 36 },
                    background: 'rgba(0,0,0,0.05)',
                    color: '#1d1d1f',
                    transition: 'all 0.3s',
                    '&:hover': {
                      background: s.color,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    '& svg': { fontSize: { xs: 14, md: 16 } },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mb: { xs: 2, md: 3 } }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 1.5, sm: 2 }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.7rem', md: '0.8125rem' },
              color: '#86868b',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {new Date().getFullYear()} Kelajak Markazi. {t('footer.rights')}.
          </Typography>

          <Stack
            direction="row"
            spacing={{ xs: 2, md: 2.5 }}
            sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            {[t('footer.privacy'), t('footer.terms'), t('footer.sitemap')].map((label, i) => (
              <Typography
                key={i}
                component="a"
                href="#"
                sx={{
                  fontSize: { xs: '0.7rem', md: '0.8125rem' },
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