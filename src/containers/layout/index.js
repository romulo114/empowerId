import { Header } from './header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
