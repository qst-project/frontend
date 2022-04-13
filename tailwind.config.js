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
      'blue-1': '#47E9FF',
      'blue-2': '#BCF7FF',
      // 'white-003': '00ff00',
      // 'white-008': 'ff0000',
      // 'black-003': 'rgba(0, 0, 0, 0.03)',
      
      // light theme
      'light-bg-1': '#F8F8F8',
      'light-bg-2': '#88A7AB',
      'light-box-1': '#FFFFFF',
      'light-box-2': '#CCDADC',
      'light-text-1': '#6C8F94',
      'light-text-2': '#8FAAAD',
      'light-text-3': '#A9C7CB',
      'light-help-bg': 'rgba(255, 255, 255, 0.42)',
      'light-highlight': 'rgba(50, 95, 101, 0.06)',
      'light-headerbtn': 'rgba(32, 86, 94, 0.28)',

      // dark theme
      'dark-bg-1': '#5A5A5A',
      'dark-bg-2': '#181818',
      'dark-box-1': '#404040',
      'dark-box-2': '#0F0F0F',
      'dark-header-1': '#404040',
      'dark-header-2': '#0F0F0F',
      'dark-text-1': '#DCDCDC',
      'dark-text-2': '#9C9C9C',
      'dark-text-3': '#5A5A5A',
      'dark-highlight': 'rgba(0, 0, 0, 0.1)',
      'dark-headerbtn': 'rgba(255, 255, 255, 0.08)',
      
      'black-02': 'rgba(0, 0, 0, 0.2)',
      
      // 'grey-4': '#0000ff',
      // 'grey-5': '#0000ff',
      // 'grey-6': '#ff0000',
      // 'grey-7': '#0000ff',
      // 'grey-8': '#00ff00',
      
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      xs: ['14px', { lineHeight: '1.25rem' }],
      sm: ['18px', { lineHeight: '1.5rem' }],
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
