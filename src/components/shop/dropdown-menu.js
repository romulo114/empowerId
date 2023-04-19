import { useState } from 'react';
import { Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus({ menuList }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState('Computers');
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (title) => {
    setActiveMenu(title);
    handleClose();
  };

  return (
    <Box>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={handleClick}
        endIcon={
          <KeyboardArrowDownIcon sx={{ width: '16px', height: '16px' }} />
        }
        sx={{
          position: 'relative',
          padding: 0,
          borderBottom: `4px solid ${theme.palette.primary.main}`,
          paddingBlock: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          as='span'
          textTransform='initial'
          lineHeight={1.19}
          fontSize='27px'
          fontWeight='500'
          height='32px'
          display='block'
          color={theme.palette.black.light}
        >
          {activeMenu}
        </Box>
        <Box
          as='span'
          sx={{
            width: '28px',
            height: '20px',
            padding: '0 8px',
            borderRadius: '8px',
            backgroundColor: `${theme.palette.primary.main}`,
            color: `${theme.palette.primary.light}`,
          }}
          ml={3}
        >
          3
        </Box>
      </Button>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuList.map((menuItem) => {
          return (
            <MenuItem
              onClick={() => handleMenuClick(menuItem.title)}
              key={menuItem.title}
              sx={{ width: '313px' }}
              disableRipple
            >
              <img src={menuItem.icon} alt={menuItem.title} />
              <Typography
                component='span'
                sx={{
                  marginLeft: '20px',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {menuItem.title}
              </Typography>
            </MenuItem>
          );
        })}
      </StyledMenu>
    </Box>
  );
}
