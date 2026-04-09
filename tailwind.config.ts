import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '.dark'],
  content: ['app/**/*.{js,ts,jsx,tsx}', 'app/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#7A9E7E',
        sageLight: '#A8C5AB',
        sageDark: '#4E7253',
        sageDarker: '#3D5A42',
        bark: '#5C4A3A',
        barkLight: '#8A7060',
        gold: '#B89A5E',
        offWhite: '#F3F1EC',
        cream: '#EDE9E0',
        creamDark: '#E5E0D4',
        text: '#1C1C1A',
        textMuted: '#6B6560',
        border: '#E2DDD5',
        borderDark: '#D1C9BC',
        // Section backgrounds
        sectionHero: '#ffffff',
        sectionMarquee: '#F3F1EC',
        sectionProducts: '#ffffff',
        sectionAbout: '#F3F1EC',
        sectionTestimonials: '#ffffff',
        sectionBio: '#F3F1EC',
        sectionNewsletter: '#5C4A3A',
        sectionFooter: '#1C1C1A',
        // Dark mode colors
        darkBg: '#0a1f0f',
        darkText: '#f0f2f0',
        darkTextMuted: '#a8c5ab',
        darkAccent: '#7ae07a',
        darkBorder: '#3a5f3f',
        darkCream: '#2a4f2f',
        darkCreamDark: '#223d28',
        darkSectionHero: '#0a1f0f',
        darkSectionMarquee: '#122918',
        darkSectionProducts: '#0a1f0f',
        darkSectionAbout: '#122918',
        darkSectionTestimonials: '#0a1f0f',
        darkSectionBio: '#122918',
        darkSectionNewsletter: '#1a2f1f',
        darkSectionFooter: '#060d07',
      },
    },
  },
  plugins: [],
};

export default config;
