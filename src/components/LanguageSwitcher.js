import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';

const languages = [
  { code: 'uz', label: 'O\'zbekcha', flag: '🇺🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

export default function LanguageSwitcher({ color = '#1d1d1f' }) {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    handleClose();
  };

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <>
      <Tooltip title="Til / Язык / Language">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{
            color,
            '&:hover': { background: 'rgba(0,0,0,0.04)' },
          }}
        >
          <LanguageIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 180,
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
            selected={i18n.language === lang.code}
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
              primary={lang.label}
              primaryTypographyProps={{ fontSize: '0.9375rem' }}
            />
            {i18n.language === lang.code && (
              <CheckIcon sx={{ fontSize: 18, color: '#0071e3', ml: 1 }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}