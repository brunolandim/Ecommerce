import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'woman': "url('/src/app/public/woman.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      colors: {
        nwYellow: {
          500: '#F9D648',
          600: '#FBAF17'
        },
        nwBlue: {
          500: '#1E2A3A',
        },
      }
    },
  },
  plugins: [],
}
export default config
