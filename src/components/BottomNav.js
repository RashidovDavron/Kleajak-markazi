import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import ExploreIcon from '@mui/icons-material/Explore';

export default function BottomNav() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t('nav.home'), icon: <HomeIcon />, path: '/' },
    { label: t('nav.circles'), icon: <SchoolIcon />, path: '/circles' },
    { label: t('nav.sciences'), icon: <ScienceIcon />, path: '/sciences' },
    { label: t('nav.professions'), icon: <WorkIcon />, path: '/professions' },
    { label: t('nav.career'), icon: <ExploreIcon />, path: '/career' },
  ];

  // Login/Register sahifalarida bottom nav ko'rinmasin
  const hiddenPaths = ['/login', '/register'];
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  const currentIndex = navItems.findIndex((item) =>
    item.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.path)
  );

  return (
    <Box
      sx={{
        display: { xs: 'block', lg: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        // MUHIM: Netlify badge va boshqa elementlar bilan to'qnashmaslik
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          // Safe area (iPhone X+)
          pb: 'env(safe-area-inset-bottom)',
        }}
      >
        <BottomNavigation
          value={currentIndex === -1 ? 0 : currentIndex}
          onChange={(e, newValue) => navigate(navItems[newValue].path)}
          showLabels
          sx={{
            backgroundColor: 'transparent',
            height: { xs: 64, sm: 68 },
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: { xs: '6px 2px', sm: '8px 4px' },
              color: '#86868b',
              transition: 'color 0.2s ease',
              '& .MuiSvgIcon-root': {
                fontSize: { xs: '1.4rem', sm: '1.5rem' },
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: { xs: '0.68rem', sm: '0.72rem' },
                fontWeight: 500,
                letterSpacing: '-0.01em',
                mt: 0.25,
                '&.Mui-selected': {
                  fontSize: { xs: '0.68rem', sm: '0.72rem' },
                },
              },
            },
            '& .Mui-selected': {
              color: '#0071e3 !important',
              '& .MuiSvgIcon-root': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease',
              },
            },
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}