import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '@emotion/react';
import { NavigationBar } from 'components/shop/navigation-bar';
import { Content } from 'components/shop/content';

export const ShopPage = () => {
  const theme = useTheme();
  const [isGridView, setIsGridView] = useState(true);

  return (
    <Box component='main' bgcolor={`${theme.palette.bg.main}`} pb={5}>
      <Container
        sx={{
          width: '100%',
        }}
        maxWidth='unset'
      >
        <NavigationBar isGridView={isGridView} setIsGridView={setIsGridView} />
        <Content isGridView={isGridView} />
      </Container>
    </Box>
  );
};
