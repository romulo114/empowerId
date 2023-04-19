import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#307fc1',
      dark: '#1f629a',
    },
    secondary: {
      light: '#fff',
      main: '#01ae8f',
      dark: '#118e77',
    },
    tertiary: {
      light: '#fff',
      main: '#453fbb',
      dark: '#1e1989',
    },
    quaternary: {
      light: '#fff',
      main: '#ff3c00',
      dark: '#bf2f03',
    },
    success: {
      light: '#fff',
      main: '#3eaa05',
      dark: '#3c8416',
    },
    error: {
      light: '#fff',
      main: '#ff4d5f',
      dark: '#ba002c',
    },
    warning: {
      light: '#fff',
      main: '#ff7e00',
      dark: '#b86d24',
    },
    info: {
      light: '#fff',
      main: '#265fb4',
      dark: '#0f3d81',
    },
    disable: {
      light: '#fff',
      main: '#d0d9e2',
      dark: '#aeb8c3',
    },
    gray: {
      light: '#e8e8e8',
      main: '#e8e8e8',
      dark: '#e8e8e8',
    },
    bg: {
      main: '#eef0f4',
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
