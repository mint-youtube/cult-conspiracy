/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0E0E0F',
        'bg-secondary': '#161617',
        fg: '#D5D5D5',
        muted: '#888888',
        accent: '#A03030',
        accent2: '#701F1F',
        border: '#2D2D2F',
        hover: '#1F1F21',
      },
      fontFamily: {
        heading: ["'Stylish', serif", 'system-ui', 'sans-serif'],
        body: ["'Noto Serif KR', serif", 'system-ui', 'sans-serif'],
        mono: ["'Courier Prime', monospace", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#D5D5D5',
            '--tw-prose-headings': '#D5D5D5',
            '--tw-prose-links': '#A03030',
            '--tw-prose-bold': '#A03030',
            '--tw-prose-quotes': '#888888',
            '--tw-prose-quote-borders': '#A03030',
            '--tw-prose-code': '#A03030',
            '--tw-prose-borders': '#2D2D2F',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #2D2D2F',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#1F1F21',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#1F1F21',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #2D2D2F',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
