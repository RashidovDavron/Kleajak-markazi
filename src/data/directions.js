export const directions = [
  {
    id: 1,
    icon: '💻',
    title: { uz: 'IT va Dasturlash', ru: 'IT и Программирование', en: 'IT & Programming' },
    desc: {
      uz: 'Dasturlash, web, mobil, AI',
      ru: 'Программирование, веб, мобильные, ИИ',
      en: 'Programming, web, mobile, AI',
    },
    color: '#0071e3',
  },
  {
    id: 2,
    icon: '🔬',
    title: { uz: 'Ilm-fan', ru: 'Наука', en: 'Science' },
    desc: {
      uz: 'Fizika, kimyo, biologiya',
      ru: 'Физика, химия, биология',
      en: 'Physics, chemistry, biology',
    },
    color: '#30d158',
  },
  {
    id: 3,
    icon: '🎨',
    title: { uz: 'Ijodkorlik', ru: 'Творчество', en: 'Creativity' },
    desc: {
      uz: 'Dizayn, rasm, musiqa',
      ru: 'Дизайн, рисование, музыка',
      en: 'Design, drawing, music',
    },
    color: '#ff9f0a',
  },
  {
    id: 4,
    icon: '🌐',
    title: { uz: 'Tillar', ru: 'Языки', en: 'Languages' },
    desc: {
      uz: 'Ingliz, rus, arab, xitoy',
      ru: 'Английский, русский, арабский, китайский',
      en: 'English, Russian, Arabic, Chinese',
    },
    color: '#5e5ce6',
  },
  {
    id: 5,
    icon: '🚀',
    title: { uz: 'Zamonaviy kasblar', ru: 'Современные профессии', en: 'Modern Professions' },
    desc: {
      uz: 'Kelajakda talab qilinadigan kasblar',
      ru: 'Профессии, востребованные в будущем',
      en: 'Professions in demand in the future',
    },
    color: '#ff375f',
  },
  {
    id: 6,
    icon: '🎯',
    title: { uz: "Kasbga yo'naltirish", ru: 'Профориентация', en: 'Career Guidance' },
    desc: {
      uz: "To'g'ri kasbni tanlash",
      ru: 'Выбор правильной профессии',
      en: 'Choosing the right profession',
    },
    color: '#00c7be',
  },
];

export const careerQuestions = [
  {
    id: 1,
    q: {
      uz: 'Sizga qaysi soha qiziqarli?',
      ru: 'Какая сфера вам интересна?',
      en: 'Which field interests you?',
    },
    options: [
      { value: 'it', label: { uz: 'IT va texnologiya', ru: 'IT и технологии', en: 'IT & technology' } },
      { value: 'science', label: { uz: 'Ilm-fan', ru: 'Наука', en: 'Science' } },
      { value: 'creative', label: { uz: 'Ijodkorlik', ru: 'Творчество', en: 'Creativity' } },
      { value: 'language', label: { uz: 'Tillar', ru: 'Языки', en: 'Languages' } },
    ],
  },
  {
    id: 2,
    q: {
      uz: "Qanday ishlashni afzal ko'rasiz?",
      ru: 'Как предпочитаете работать?',
      en: 'How do you prefer to work?',
    },
    options: [
      { value: 'team', label: { uz: 'Jamoa bilan', ru: 'В команде', en: 'In a team' } },
      { value: 'solo', label: { uz: "Yolg'iz", ru: 'Один', en: 'Alone' } },
      { value: 'both', label: { uz: 'Ikkalasi ham', ru: 'И так, и так', en: 'Both' } },
    ],
  },
  {
    id: 3,
    q: {
      uz: 'Kelajakda qanday ishlamoqchisiz?',
      ru: 'Как хотите работать в будущем?',
      en: 'How do you want to work in the future?',
    },
    options: [
      { value: 'office', label: { uz: 'Ofisda', ru: 'В офисе', en: 'In office' } },
      { value: 'remote', label: { uz: 'Masofadan', ru: 'Удалённо', en: 'Remote' } },
      { value: 'freelance', label: { uz: 'Frilanser', ru: 'Фрилансер', en: 'Freelancer' } },
      { value: 'business', label: { uz: "O'z biznesim", ru: 'Свой бизнес', en: 'Own business' } },
    ],
  },
];