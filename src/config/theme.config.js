import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#307fc1',
      dark: '#1f629a',
    },
    secondary: {
      main: '#01ae8f',
      dark: '#118e77',
    },
    tertiary: {
      main: '#453fbb',
      dark: '#1e1989',
    },
    quaternary: {
      main: '#ff3c00',
      dark: '#bf2f03',
    },
    success: {
      main: '#3eaa05',
      dark: '#3c8416',
    },
    error: {
      main: '#ff4d5f',
      dark: '#ba002c',
    },
    warning: {
      main: '#ff7e00',
      dark: '#b86d24',
    },
    info: {
      main: '#265fb4',
      dark: '#0f3d81',
    },
    disable: {
      main: '#d0d9e2',
      dark: '#aeb8c3',
    },
    gray: {
      light: '#d8d8dd',
      main: '#e8e8e8',
      dark: '#e8e8e8',
      darkest: '#b4b4b4',
    },
    bg: {
      light: '#fbfbfb',
      main: '#eef0f4',
    },
    black: {
      light: '#5d6870',
      dark: '#7b7c7c',
      darkest: '#959598',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  colorSchemes: {
    primary: {
      gradient: 'linear-gradient(107deg, #682a94, #05afe0)',
    },
    secondary: {
      gradient: 'linear-gradient(107deg, #019cae, #307fc1)',
    },
    tertiary: {
      gradient: 'linear-gradient(107deg, #01ae8f, #307fc1)',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1360,
    },
  },
  typography: {
    fontFamily: ['Rubik'].join(','),
  },
});
