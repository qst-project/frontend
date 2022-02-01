module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      'white': '#ffffff',
      'white-003': 'rgba(255, 255, 255, 0.02)',
      'black-02': 'rgba(0, 0, 0, 0.2)',
      'black-003': 'rgba(0, 0, 0, 0.03)',
      'grey-1': '#0F0F0F',
      'grey-2': '#181818',
      'grey-3': '#404040',
      'grey-4': '#5A5A5A',
      'grey-5': '#7D7D7D',
      'grey-6': '#9C9C9C',
      'grey-7': '#C1C1C1',
      'grey-8': '#DCDCDC',
      'blue-1': '#47E9FF',
      'blue-2': '#BCF7FF',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      xs: ['14px', { lineHeight: '1rem' }],
      sm: ['18px', { lineHeight: '1.25rem' }],
      base: ['20px', { lineHeight: '1.5rem' }],
      lg: ['36px', { lineHeight: '1.75rem' }],
      // xl: ['1.25rem', { lineHeight: '1.75rem' }],
    },
    boxShadow: {
      header: '0 -3px 39px rgba(0, 0, 0, 0.65)',
      box: '15px 14px 28px -3px rgba(0, 0, 0, 0.65)',
    },
    container: {
      padding: {
        sm: '26px',
        md: '26px',
        lg: '40px',
        xl: '140px',
        '2xl': '240px',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-box': 'linear-gradient(165deg, #7D7D7D 0%, #404040 20%, #0f0f0f 75%)',
        'gradient-button': 'linear-gradient(165deg, #5a5a5a 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.16) 75%)',
      },
      transitionProperty: {
        text: 'color',
      }
    },
  },
  plugins: [],
}
