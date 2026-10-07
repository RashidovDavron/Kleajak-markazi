import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setOpen(false);
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/circles', label: t('nav.circles') },
    { to: '/sciences', label: t('nav.sciences') },
    { to: '/professions', label: t('nav.professions') },
    { to: '/career', label: t('nav.career') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 56, md: 64 },
              justifyContent: 'space-between',
            }}
          >
            {/* LOGO */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.2 },
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: { xs: 36, sm: 42 },
                  height: { xs: 36, sm: 42 },
                  borderRadius: 2.5,
                  background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '1.05rem' },
                  letterSpacing: '-0.5px',
                  boxShadow: '0 4px 14px rgba(0, 113, 227, 0.35)',
                  flexShrink: 0,
                }}
              >
                KM
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    color: '#1d1d1f',
                    lineHeight: 1.1,
                  }}
                >
                  Kelajak Markazi
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    color: '#86868b',
                    lineHeight: 1.1,
                  }}
                >
                  Bilim va kasb maskani
                </Typography>
              </Box>
            </Box>

            {/* DESKTOP NAV */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 0.3,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={Link}
                  to={item.to}
                  disableRipple
                  sx={{
                    color: '#1d1d1f',
                    opacity: isActive(item.to) ? 1 : 0.75,
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    px: 1.5,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    textTransform: 'none',
                    '&:hover': {
                      opacity: 1,
                      background: 'transparent',
                      transform: 'none',
                    },
                    '&::after': isActive(item.to)
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '50%',
                          height: 2,
                          borderRadius: 1,
                          background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                        }
                      : {},
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* RIGHT ACTIONS */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 0.75 },
                flexShrink: 0,
              }}
            >
              <LanguageSwitcher />

              {user ? (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: 1.5,
                    ml: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 34,
                      height: 34,
                      bgcolor: '#0071e3',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                    }}
                  >
                    {user.name?.[0]?.toUpperCase()}
                  </Avatar>
                  <Button
                    onClick={handleLogout}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(0,0,0,0.15)',
                      color: '#1d1d1f',
                      fontWeight: 500,
                      '&:hover': {
                        borderColor: '#ff3b30',
                        color: '#ff3b30',
                        background: 'rgba(255,59,48,0.06)',
                        transform: 'none',
                      },
                    }}
                  >
                    {t('nav.logout')}
                  </Button>
                </Box>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  size="small"
                  startIcon={<PersonIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    display: { xs: 'none', md: 'inline-flex' },
                    color: '#1d1d1f',
                    fontSize: '0.9375rem',
                    px: 2,
                    ml: 1,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'rgba(0,0,0,0.04)',
                      transform: 'none',
                    },
                  }}
                >
                  {t('nav.login')}
                </Button>
              )}

              {/* MOBILE MENU BUTTON */}
              <IconButton
                onClick={() => setOpen(true)}
                sx={{
                  display: { xs: 'inline-flex', lg: 'none' },
                  color: '#1d1d1f',
                  p: 1,
                  '&:hover': { background: 'rgba(0,0,0,0.04)' },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: { xs: '100%', sm: 400 },
            borderRadius: 0,
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '-0.5px',
              }}
            >
              KM
            </Box>
            <Typography sx={{ fontSize: '1.05rem', fontWeight: 600 }}>
              Kelajak Markazi
            </Typography>
          </Box>
          <IconButton onClick={() => setOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {user && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 2,
              p: 1.5,
              background: '#f5f5f7',
              borderRadius: 3,
            }}
          >
            <Avatar sx={{ bgcolor: '#0071e3', width: 40, height: 40 }}>
              {user.name?.[0]?.toUpperCase()}
            </Avatar>
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {user.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: '#86868b',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {user.email}
              </Typography>
            </Box>
          </Box>
        )}

        <List disablePadding>
          {navItems.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2,
                  py: 1.25,
                  '&.active': {
                    background: 'rgba(0, 113, 227, 0.08)',
                    color: '#0071e3',
                  },
                }}
                className={isActive(item.to) ? 'active' : ''}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        {/* TIL TANLASH */}
        <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
          <LanguageSwitcher />
        </Box>

        <Divider sx={{ my: 2 }} />

        {user ? (
          <Button
            onClick={handleLogout}
            variant="outlined"
            fullWidth
            color="error"
            sx={{ py: 1.25, fontSize: '0.9375rem' }}
          >
            {t('nav.logout')}
          </Button>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
            <Button
              component={Link}
              to="/login"
              onClick={() => setOpen(false)}
              variant="outlined"
              fullWidth
              sx={{ py: 1.25, fontSize: '0.9375rem' }}
            >
              {t('nav.login')}
            </Button>
            <Button
              component={Link}
              to="/register"
              onClick={() => setOpen(false)}
              variant="contained"
              fullWidth
              sx={{ py: 1.25, fontSize: '0.9375rem' }}
            >
              {t('nav.register')}
            </Button>
          </Box>
        )}
      </Drawer>
    </>
  );
}