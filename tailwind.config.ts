import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        footerColor: '#F5F5F5',
        buttonColor: '#E3002A',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
