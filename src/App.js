import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouter } from 'containers/router';
import { theme } from 'config/theme.config';

import './App.css';

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>
);
