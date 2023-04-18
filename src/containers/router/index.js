import { Routes, Route } from 'react-router-dom';
import { NoSsr } from '@mui/material';
import { Title } from 'components/common/title';
import { Computers } from 'containers/pages/computers';

export const AppRouter = () => {
  return (
    <NoSsr>
      <Title />
      <Routes>
        <Route path='/computers' element={<Computers />} />
        <Route path='/' element={<Computers />} />
      </Routes>
    </NoSsr>
  );
};
