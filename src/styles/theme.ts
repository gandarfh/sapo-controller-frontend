const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1400px',
}

type BreakpointsType = typeof breakpoints

const breakpointFunc = (breakpoint: keyof BreakpointsType) => {
  const size = theme.breakpoints[breakpoint] || theme.breakpoints['lg']
  return `@media screen and (min-width: ${size})`
}

const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1400px',
  },
  breakpointFunc,
  icons: {
    extraSmall: '1.2rem',
    small: '1.8rem',
    medium: '2.4rem',
    large: '4.8rem',
    extraLarge: '9.6rem',
  },
  font: {
    family: 'Montserrat',
    weight: {
      thin: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    sizes: {
      mobile: {
        text: {
          extraSmall: '10rem',
          small: '12rem',
          medium: '14rem',
          large: '16rem',
          extraLarge: '18rem',
        },
        title: {
          extraSmall: '14rem',
          small: '16rem',
          medium: '20rem',
          large: '24rem',
          extraLarge: '32rem',
        },
      },
      desktop: {
        text: {
          extraSmall: '12rem',
          small: '14rem',
          medium: '16rem',
          large: '18rem',
          extraLarge: '20rem',
        },
        title: {
          extraSmall: '16rem',
          small: '20rem',
          medium: '24rem',
          large: '32rem',
          extraLarge: '40rem',
        },
      },
    },
  },
  buttonSize: {
    extraSmall: { height: '2.4rem', font: '1.2rem' },
    small: { height: '3.0rem', font: '1.2rem' },
    medium: { height: '4.0rem', font: '1.4rem' },
    large: { height: '5.0rem', font: '1.6rem' },
    extraLarge: { height: '5.0rem', font: '1.8rem' },
  },
  colors: {
    primaryLighten: '#ADEBD5',
    primaryLight: '#33CC95',
    primary: '#01A66B',
    primaryDark: '#016541',
    primaryDarken: '#013D27',

    secondaryLighten: '#99A9FF',
    secondaryLight: '#758AFF',
    secondary: '#536DFE',
    secondaryDark: '#2B40B4',
    secondaryDarken: '#192567',

    grayLight: '#DDDDDD',
    gray: '#7E7E7E',
    black: '#474747',
    blackDark: '#333333',
    blackDarken: '#242424',

    white: '#FFFFFF',
    background: '#f5f5f5',
    success: '#28C48C',
    danger: '#EB5757',
    info: '#F2994A',
  },
}

export default theme
