import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px'
      }
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost'
    },
    backgroundImage: {
      hero: 'url(/hero/bg.jpg)',
      grid: 'url(/grid.png)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a'
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d'
        }
      }
    }
  },
  plugins: []
}
export default config
