import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  IconButton,
  Stack,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const leaders = [
  {
    id: 1,
    name: 'Alisher Navoiy',
    role: 'Bosh direktor',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    id: 2,
    name: 'Zulfiya Karimova',
    role: 'Bosh menejer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    id: 3,
    name: 'Bobur Rahmonov',
    role: 'IT direktori',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    id: 4,
    name: 'Malika Yusupova',
    role: 'Marketing rahbari',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    id: 5,
    name: 'Sardor Aliyev',
    role: 'CTO',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
  {
    id: 6,
    name: 'Dilnoza Ahmedova',
    role: 'HR direktori',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&crop=faces',
  },
];

export default function Leadership() {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 12 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            Raxbariyat.
          </Typography>
          <Typography
            className="fade-up fade-up-delay-1"
            sx={{
              color: '#86868b',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              maxWidth: 620,
              mx: 'auto',
            }}
          >
            Bizning jamoamiz rahbarlari.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ background: '#f5f5f7', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {leaders.map((p, i) => (
              <Grid item xs={6} md={4} key={p.id}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 4) + 1}`}
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                  }}
                >
                  <Avatar
                    src={p.avatar}
                    alt={p.name}
                    sx={{
                      width: { xs: 100, md: 140 },
                      height: { xs: 100, md: 140 },
                      mx: 'auto',
                      mb: 3,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: '1.0625rem', md: '1.25rem' },
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      mb: 0.5,
                    }}
                  >
                    {p.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#0071e3',
                      fontSize: { xs: '0.85rem', md: '0.9375rem' },
                      mb: 2.5,
                    }}
                  >
                    {p.role}
                  </Typography>

                  <Stack direction="row" spacing={1} justifyContent="center">
                    {[<LinkedInIcon key="li" />, <TwitterIcon key="tw" />, <EmailIcon key="em" />].map(
                      (icon, j) => (
                        <IconButton
                          key={j}
                          size="small"
                          sx={{
                            background: '#f5f5f7',
                            color: '#1d1d1f',
                            width: 40,
                            height: 40,
                            '&:hover': {
                              background: 'rgba(0, 113, 227, 0.1)',
                              color: '#0071e3',
                            },
                            '& svg': { fontSize: 18 },
                          }}
                        >
                          {icon}
                        </IconButton>
                      )
                    )}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}