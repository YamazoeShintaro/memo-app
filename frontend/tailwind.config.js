/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/*.tsx',
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {
      fontSize: {
        'minimum': '10px',
        'caption': '12px',
        'body': '16px',
        'title': '24px',
      },
      colors: {
        brandColor: '#4CB3F8',
        textRegular: '#333333',
        textLight: '#4D4D4D',
        textBrandColor: '#4CB3F8',
        buttonPrimary: '#4CB3F8',
        buttonPrimaryHover: '#4299e1',
        buttonNormal: '#B3B3B3',
        buttonNormalHover: '#8C8C8C',
        buttonLineSecondary: '#4CB3F8',
        buttonSecondaryHover: '#CCCCCC',
        backgroundLight: '#F5F8FA',
        backgroundDark: '#C8E6FA',
      },
      padding: {
        '4px': '4px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
      },
      margin: {
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',
        '80px': '80px',
      },
      height: {
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '44px': '44px',
        '60px': '60px',
        '90px': '90px',
      },
      width: {
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '90px': '90px',
      },
    },
  },
  plugins: [],
};
