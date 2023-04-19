import { Box, AppBar, Container, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Logo from 'public/assets/img/logo.svg';
import Avatar from 'public/assets/img/avatar.png';
import ShopIcon from 'public/assets/img/icons-shop.svg';

export const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position='static'
      color=''
      style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)' }}
    >
      <Container
        sx={{
          height: '64px',
          maxHeight: '64px',
          display: { xs: 'flex' },
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        maxWidth='unset'
      >
        <Box display='flex' alignItems='center'>
          <Box
            sx={{ paddingRight: { md: '24px', xs: '10px' } }}
            borderRight={`1px solid ${theme.palette.gray.main}`}
          >
            <img src={Logo} alt='logo' />
          </Box>
          <Box
            display='flex'
            alignItems='center'
            sx={{ marginLeft: { md: '24px', xs: '10px' } }}
          >
            <img src={ShopIcon} alt='icon_shop' />
            <Typography
              component={'span'}
              sx={{
                fontSize: { md: '20px', xs: '16px' },
                fontWeight: '300',
                lineHeight: '1.2',
              }}
              ml={2}
              color='primary'
            >
              IAM SHOP
            </Typography>
          </Box>
        </Box>
        <Box display='flex' alignItems='center'>
          <img src={Avatar} alt='avatar' />
          <Box as='span' ml='12px'>
            Patric Parker
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
