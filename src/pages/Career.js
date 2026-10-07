import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  LinearProgress,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { directions, careerQuestions } from '../data/directions';

export default function Career() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || 'uz';

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const handleNext = () => {
    if (step < careerQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // Hisoblash
      const counts = {};
      Object.values(answers).forEach((v) => {
        counts[v] = (counts[v] || 0) + 1;
      });
      const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];

      const resultMap = {
        it: {
          title: {
            uz: 'IT va Dasturlash',
            ru: 'IT и Программирование',
            en: 'IT & Programming',
          },
          desc: {
            uz: "Sizga IT sohasi mos keladi! Dasturlash, web, mobil yoki AI yo'nalishini tanlang.",
            ru: 'Вам подходит IT! Программирование, веб, мобильные или ИИ.',
            en: 'IT suits you! Choose programming, web, mobile or AI.',
          },
          icon: '💻',
          link: '/professions',
        },
        science: {
          title: { uz: 'Ilm-fan', ru: 'Наука', en: 'Science' },
          desc: {
            uz: "Sizga ilm-fan yoqadi! Fizika, kimyo, biologiya yoki matematikani tanlang.",
            ru: 'Вам нравится наука! Физика, химия, биология или математика.',
            en: 'You like science! Choose physics, chemistry, biology or math.',
          },
          icon: '🔬',
          link: '/sciences',
        },
        creative: {
          title: { uz: 'Ijodkorlik', ru: 'Творчество', en: 'Creativity' },
          desc: {
            uz: "Siz ijodkorsiz! Dizayn, rasm, musiqa yoki 3D modellashtirishni tanlang.",
            ru: 'Вы творческий! Дизайн, рисование, музыка или 3D.',
            en: 'You are creative! Design, drawing, music or 3D.',
          },
          icon: '🎨',
          link: '/circles',
        },
        language: {
          title: { uz: 'Tillar', ru: 'Языки', en: 'Languages' },
          desc: {
            uz: "Siz tillarga qiziqasiz! Ingliz, rus, arab yoki xitoy tilini o'rganing.",
            ru: 'Вы интересуетесь языками! Английский, русский, арабский или китайский.',
            en: 'You like languages! English, Russian, Arabic or Chinese.',
          },
          icon: '🌐',
          link: '/circles',
        },
      };

      setResult(resultMap[top] || resultMap.it);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const currentQ = careerQuestions[step];
  const canProceed = answers[currentQ?.id];

  return (
    <Box>
      {/* HERO */}
      <Box sx={{ textAlign: 'center', py: { xs: 8, md: 10 }, px: 2 }}>
        <Container maxWidth="md">
          <Typography variant="h1" className="fade-up" sx={{ mb: 3 }}>
            {t('sections.career_title')}
          </Typography>
          <Typography
            className="fade-up fade-up-delay-1"
            sx={{
              color: '#86868b',
              fontSize: { xs: '1.125rem', md: '1.5rem' },
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            {t('sections.career_desc')}
          </Typography>
        </Container>
      </Box>

      {/* DIRECTIONS */}
      <Box sx={{ background: '#f5f5f7', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {directions.map((d, i) => (
              <Grid item xs={12} sm={6} md={4} key={d.id}>
                <Card
                  className={`fade-up fade-up-delay-${(i % 3) + 1}`}
                  sx={{ p: { xs: 3, md: 4 }, height: '100%' }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 3.5,
                      background: `${d.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.25rem',
                      mb: 2.5,
                    }}
                  >
                    {d.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      mb: 1.5,
                    }}
                  >
                    {d.title[lang] || d.title.uz}
                  </Typography>
                  <Typography sx={{ color: '#86868b', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    {d.desc[lang] || d.desc.uz}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TEST */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              icon={<SchoolIcon />}
              label={lang === 'ru' ? 'Онлайн-тест' : lang === 'en' ? 'Online Test' : 'Onlayn test'}
              sx={{
                background: 'rgba(0, 113, 227, 0.1)',
                color: '#0071e3',
                fontWeight: 600,
                mb: 2,
                px: 1,
              }}
            />
            <Typography variant="h2" sx={{ mb: 2 }}>
              {lang === 'ru'
                ? 'Профориентационный тест'
                : lang === 'en'
                ? 'Career Test'
                : "Kasbga yo'naltirish testi"}
            </Typography>
            <Typography sx={{ color: '#86868b', fontSize: '1.125rem' }}>
              {lang === 'ru'
                ? 'Ответьте на 3 вопроса и узнайте свою профессию'
                : lang === 'en'
                ? 'Answer 3 questions and find your career'
                : "3 ta savolga javob bering va o'zingizga mos kasbni bilib oling"}
            </Typography>
          </Box>

          <Card
            className="fade-up"
            sx={{
              p: { xs: 3, md: 5 },
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.08)',
              '&:hover': { transform: 'none' },
            }}
          >
            {!result ? (
              <>
                {/* PROGRESS */}
                <Box sx={{ mb: 4 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 1.5 }}
                  >
                    <Typography sx={{ fontSize: '0.875rem', color: '#86868b' }}>
                      {lang === 'ru'
                        ? `Вопрос ${step + 1} из ${careerQuestions.length}`
                        : lang === 'en'
                        ? `Question ${step + 1} of ${careerQuestions.length}`
                        : `Savol ${step + 1} / ${careerQuestions.length}`}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: '#0071e3', fontWeight: 600 }}>
                      {Math.round(((step + 1) / careerQuestions.length) * 100)}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={((step + 1) / careerQuestions.length) * 100}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      background: '#f5f5f7',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(135deg, #0071e3 0%, #5856d6 100%)',
                        borderRadius: 3,
                      },
                    }}
                  />
                </Box>

                {/* QUESTION */}
                <Typography
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    mb: 3,
                  }}
                >
                  {currentQ.q[lang] || currentQ.q.uz}
                </Typography>

                <RadioGroup
                  value={answers[currentQ.id] || ''}
                  onChange={(e) => handleAnswer(currentQ.id, e.target.value)}
                >
                  <Stack spacing={1.5}>
                    {currentQ.options.map((opt, i) => (
                      <Card
                        key={i}
                        onClick={() => handleAnswer(currentQ.id, opt.value)}
                        sx={{
                          p: 2,
                          cursor: 'pointer',
                          border:
                            answers[currentQ.id] === opt.value
                              ? '2px solid #0071e3'
                              : '1px solid rgba(0,0,0,0.08)',
                          background:
                            answers[currentQ.id] === opt.value
                              ? 'rgba(0, 113, 227, 0.04)'
                              : 'white',
                          boxShadow: 'none',
                          '&:hover': {
                            transform: 'none',
                            boxShadow: 'none',
                            borderColor: '#0071e3',
                          },
                        }}
                      >
                        <FormControlLabel
                          value={opt.value}
                          control={<Radio sx={{ color: '#0071e3' }} />}
                          label={
                            <Typography
                              sx={{
                                fontSize: '1.0625rem',
                                fontWeight: 500,
                                color: '#1d1d1f',
                              }}
                            >
                              {opt.label[lang] || opt.label.uz}
                            </Typography>
                          }
                          sx={{ m: 0, width: '100%' }}
                        />
                      </Card>
                    ))}
                  </Stack>
                </RadioGroup>

                {/* BUTTONS */}
                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  {step > 0 && (
                    <Button
                      onClick={() => setStep(step - 1)}
                      variant="outlined"
                      size="large"
                      sx={{ py: 1.5, px: 3 }}
                    >
                      ← {lang === 'ru' ? 'Назад' : lang === 'en' ? 'Back' : 'Orqaga'}
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed}
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5, fontSize: '1.0625rem' }}
                  >
                    {step === careerQuestions.length - 1
                      ? lang === 'ru'
                        ? 'Узнать результат'
                        : lang === 'en'
                        ? 'See Result'
                        : 'Natijani bilish'
                      : lang === 'ru'
                      ? 'Далее'
                      : lang === 'en'
                      ? 'Next'
                      : 'Keyingi'}
                  </Button>
                </Stack>
              </>
            ) : (
              // RESULT
              <Box sx={{ textAlign: 'center' }} className="fade-in">
                <Box sx={{ fontSize: '5rem', mb: 2 }}>{result.icon}</Box>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: '#0071e3',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    mb: 1,
                  }}
                >
                  {lang === 'ru'
                    ? 'Ваш результат'
                    : lang === 'en'
                    ? 'Your result'
                    : 'Sizning natijangiz'}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, mb: 2 }}
                >
                  {result.title[lang] || result.title.uz}
                </Typography>
                <Typography
                  sx={{
                    color: '#86868b',
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    maxWidth: 500,
                    mx: 'auto',
                    mb: 4,
                  }}
                >
                  {result.desc[lang] || result.desc.uz}
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                    component={Link}
                    to={result.link}
                    variant="contained"
                    size="large"
                    sx={{ px: 4, py: 1.5 }}
                  >
                    {lang === 'ru'
                      ? 'Смотреть'
                      : lang === 'en'
                      ? 'View'
                      : "Ko'rish"}
                  </Button>
                  <Button
                    onClick={handleReset}
                    variant="outlined"
                    size="large"
                    sx={{ px: 4, py: 1.5 }}
                  >
                    {lang === 'ru'
                      ? 'Пройти снова'
                      : lang === 'en'
                      ? 'Retake'
                      : 'Qayta ishlash'}
                  </Button>
                </Stack>
              </Box>
            )}
          </Card>
        </Container>
      </Box>
    </Box>
  );
}