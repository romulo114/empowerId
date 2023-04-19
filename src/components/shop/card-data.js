import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { Button, CardActions, Box } from '@mui/material';
import cardbg from 'public/assets/img/bg.png';

export const CardData = ({ cardInfo, handleOpen }) => {
  const theme = useTheme();

  return (
    <Card sx={{ padding: 0 }}>
      <CardContent className='card-content' sx={{ padding: 0 }}>
        <Box
          sx={{
            backgroundImage: `${theme.colorSchemes.primary.gradient}, url(${cardbg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            height: '80px',
            paddingTop: '30px',
          }}
        >
          <Typography
            gutterBottom
            component='h5'
            sx={{
              margin: '0',
              color: theme.palette.primary.light,
              paddingLeft: '16px',
              lineHeight: 1,
            }}
          >
            {cardInfo.friendlyName}
          </Typography>
        </Box>
        <Box sx={{ padding: '24px 13px 24px 16px' }}>
          <Box sx={{ marginBottom: '16px' }}>
            <Typography
              component='h6'
              sx={{
                color: theme.palette.gray.main,
                textTransform: 'uppercase',
                fontSize: '12px',
              }}
            >
              Friendly name
            </Typography>
            <Typography component='span'>{cardInfo.friendlyName}</Typography>
          </Box>
          <Box sx={{ marginBottom: '16px' }}>
            <Typography
              component='h6'
              sx={{
                color: theme.palette.gray.main,
                textTransform: 'uppercase',
                fontSize: '12px',
              }}
            >
              DNS name
            </Typography>
            <Typography component='span'>{cardInfo.dnsName}</Typography>
          </Box>
          <Box sx={{ marginBottom: '16px' }}>
            <Typography
              component='h6'
              sx={{
                color: theme.palette.gray.main,
                textTransform: 'uppercase',
                fontSize: '12px',
              }}
            >
              Description
            </Typography>
            <Typography component='span'>Description</Typography>
          </Box>
          <Box>
            <Typography
              component='h6'
              sx={{
                color: theme.palette.gray.main,
                textTransform: 'uppercase',
                fontSize: '12px',
              }}
            >
              End Date
            </Typography>
            <Typography component='span' sx={{}}>
              {cardInfo.endDate}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: '0 24px 24px' }}>
        <Button
          size='small'
          color='primary'
          sx={{
            textAlign: 'center',
            width: '100%',
            padding: '8px',
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.light,
            border: `1px solid ${theme.palette.secondary.main}`,
            '&: hover': {
              backgroundColor: 'transparent',
              color: theme.palette.secondary.main,
            },
          }}
          onClick={() => handleOpen(cardInfo)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
