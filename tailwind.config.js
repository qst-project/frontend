module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/index.html'],
  darkMode: 'class',
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
      'white-008': 'rgba(255, 255, 255, 0.08)',
      'black-02': 'rgba(0, 0, 0, 0.2)',
      'black-003': 'rgba(0, 0, 0, 0.03)',
      

      // light theme
      'light-bg-1': '#F8F8F8',
      'light-bg-2': '#88A7AB',
      'light-box-1': '#FFFFFF',
      'light-box-2': '#CCDADC',
      'light-text-1': '#6C8F94',
      'light-text-2': '#8FAAAD',
      'light-help-bg': 'rgba(255, 255, 255, 0.42)',
      'blue-006': 'rgba(50, 95, 101, 0.06)',
      'blue-028': 'rgba(32, 86, 94, 0.28)',

      // dark theme
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
      xs: ['14px', { lineHeight: '1.25rem' }],
      sm: ['18px', { lineHeight: '1.25rem' }],
      base: ['20px', { lineHeight: '1.5rem' }],
      lg: ['36px', { lineHeight: '3rem' }],
      // xl: ['1.25rem', { lineHeight: '1.75rem' }],
    },
    boxShadow: {
      header: '0 -3px 39px rgba(0, 0, 0, 0.65)',
      box: '15px 14px 28px -3px rgba(0, 0, 0, 0.65)',
      'light-box': '15px 14px 28px -3px rgba(0, 0, 0, 0.2)',
      shine: '0 0 14px 2px #00E0FF'
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
        w: 'width',
        opacity: 'opacity',
        bg: 'background-color',
        wbg: 'width background-color'
      },
    },
  },
  plugins: [],
}
