import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const languages = [
  { code: 'uz', short: 'UZ', label: "O'zbekcha", flag: '🇺🇿' },
  { code: 'ru', short: 'RU', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', short: 'EN', label: 'English', flag: '🇬🇧' },
];

export default function LanguageSwitcher({ variant = 'desktop' }) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    handleClose();
  };

  const currentLang = i18n.language?.slice(0, 2) || 'uz';
  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      <Button
        onClick={handleClick}
        disableRipple
        sx={{
          minWidth: 0,
          px: 1.5,
          py: 0.75,
          borderRadius: 2,
          color: '#1d1d1f',
          fontSize: '0.8125rem',
          fontWeight: 600,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          border: '1px solid rgba(0,0,0,0.1)',
          background: 'transparent',
          '&:hover': {
            background: 'rgba(0,0,0,0.04)',
            borderColor: 'rgba(0,0,0,0.2)',
            transform: 'none',
          },
        }}
      >
        {current.short}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 3,
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.06)',
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            selected={currentLang === lang.code}
            sx={{
              py: 1.25,
              px: 2,
              fontSize: '0.9375rem',
              '&.Mui-selected': {
                background: 'rgba(0, 113, 227, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32, fontSize: '1.25rem' }}>
              {lang.flag}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0071e3',
                      letterSpacing: '0.5px',
                      minWidth: 28,
                    }}
                  >
                    {lang.short}
                  </Typography>
                  <Typography sx={{ fontSize: '0.9375rem' }}>{lang.label}</Typography>
                </Box>
              }
            />
            {currentLang === lang.code && (
              <CheckIcon sx={{ fontSize: 18, color: '#0071e3', ml: 1 }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}