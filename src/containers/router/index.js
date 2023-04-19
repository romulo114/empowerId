import { Routes, Route } from 'react-router-dom';
import { NoSsr } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ShopPage } from 'containers/pages/shop';
import { Layout } from 'containers/layout';

export const AppRouter = () => {
  return (
    <NoSsr>
      <Layout>
        <CssBaseline />
        <Routes>
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/' element={<ShopPage />} />
        </Routes>
      </Layout>
    </NoSsr>
  );
};
