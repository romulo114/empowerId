import { useState } from 'react';
import {
  Box,
  Pagination,
  Stack,
  TextField,
  InputAdornment,
  Drawer,
  Typography,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import { AccessType } from './access-type';
import { TableView } from './table-content';
import { CardView } from './card-content';
import data from 'utils/mockData';
import cardbg from 'public/assets/img/bg.png';

export const Content = ({ isGridView }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const handleOpen = (data) => {
    setOpen(true);
    setDetailData(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      mt={2}
      sx={{
        display: { xs: 'block', lg: 'flex' },
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <AccessType />
      </Box>
      <Box
        sx={{
          width: '100%',
          overflow: 'scroll',
          marginLeft: { xs: '0', lg: '24px' },
          marginTop: { xs: '24px', lg: '0' },
        }}
      >
        <Box>
          <TextField
            id='input-with-icon-textfield'
            placeholder='Search & Filter'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
              padding: 0,
              sx: { bgcolor: 'white', padding: '8px 12px', height: '32px' },
            }}
            variant='outlined'
          />
        </Box>
        {isGridView ? (
          <TableView data={data} handleOpen={handleOpen} />
        ) : (
          <CardView data={data} handleOpen={handleOpen} />
        )}
        <Stack
          spacing={-1}
          sx={{
            marginTop: '33px',
          }}
        >
          <Pagination
            count={10}
            variant='outlined'
            shape='rounded'
            sx={{
              color: 'primary.main',
              '& li': {
                marginLeft: '0',
                marginRight: '0',
                backgroundColor: `${theme.palette.primary.light}`,
              },
              '& button': {
                marginLeft: '0',
                marginRight: '0',
                borderRight: 'none',
                borderRadius: '0',
              },
              '& .MuiPaginationItem-ellipsis': {
                marginLeft: '0',
                marginRight: '0',
                borderRadius: '0',
                padding: '5px 6px',
                border: `1px solid ${theme.palette.gray.darkest}`,
                borderRight: 'none',
              },
              '& .Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: 'white',
              },
              '& li:last-child': {
                borderRight: `1px solid ${theme.palette.gray.darkest}`,
              },
            }}
          />
        </Stack>
        <Drawer anchor='right' open={open} onClose={handleClose}>
          <Box
            sx={{
              width: { lg: '768px', md: '700px', sm: '425px', xs: '318px' },
              borderRadius: '16px',
            }}
          >
            <Box
              sx={{
                backgroundImage: `${theme.colorSchemes.primary.gradient}, url(${cardbg})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                gutterBottom
                component='h2'
                sx={{ color: theme.palette.primary.light, paddingLeft: '16px' }}
              >
                {detailData?.friendlyName}
              </Typography>
              <Button onClick={handleClose}>
                <CloseIcon
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                />
              </Button>
            </Box>
            <Box
              sx={{
                padding: { xs: '32px 10px', sm: '32px' },
                boxShadow: '0 2px 16px 0 rgba(0, 0, 0, 0.11)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <Typography
                  component='span'
                  sx={{
                    color: theme.palette.black.dark,
                    textTransform: 'uppercase',
                    fontSize: '12px',
                  }}
                >
                  Friendly Name
                </Typography>
                <Typography
                  component='h6'
                  sx={{ fontSize: '14px', width: '70%' }}
                >
                  {detailData?.friendlyName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <Typography
                  component='span'
                  sx={{
                    color: theme.palette.black.dark,
                    textTransform: 'uppercase',
                    fontSize: '12px',
                  }}
                >
                  DNS Name
                </Typography>
                <Typography
                  component='h6'
                  sx={{ fontSize: '14px', width: '70%' }}
                >
                  {detailData?.dnsName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <Typography
                  component='span'
                  sx={{
                    color: theme.palette.black.dark,
                    textTransform: 'uppercase',
                    fontSize: '12px',
                  }}
                >
                  Environment
                </Typography>
                <Typography
                  component='h6'
                  sx={{ fontSize: '14px', width: '70%' }}
                >
                  {detailData?.environment}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  component='span'
                  sx={{
                    color: theme.palette.black.dark,
                    textTransform: 'uppercase',
                    fontSize: '12px',
                  }}
                >
                  End date
                </Typography>
                <Typography
                  component='h6'
                  sx={{ fontSize: '14px', width: '70%' }}
                >
                  {detailData?.endDate}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};
