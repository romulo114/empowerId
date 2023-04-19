import { useTheme } from '@emotion/react';
import { Box, Typography, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

const AccessTypeOptions = ['All', 'One-Time Access', 'Pre-Approved'];

export const AccessType = () => {
  const theme = useTheme();
  const [activeOpt, setActiveOpt] = useState('All');
  const handleChange = (title) => {
    setActiveOpt(title);
  };
  return (
    <Box
      sx={{ width: { lg: '325px' }, boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1)' }}
    >
      <Box
        bgcolor={theme.palette.primary.light}
        borderBottom={`1px solid ${theme.palette.gray.light}`}
        py={2}
        pl={5}
      >
        <Typography
          component={'span'}
          sx={{ fontSize: '18px', lineHeight: 'normal' }}
        >
          Access Type
        </Typography>
      </Box>
      <Box py={3} px={2} bgcolor={theme.palette.bg.light}>
        <InputLabel
          id='demo-simple-select-standard-label'
          sx={{
            fontSize: '10px',
            fontWeight: 500,
            color: theme.palette.gray.darkest,
            paddingLeft: '10px',
            marginBottom: '10px',
            textTransform: 'uppercase',
          }}
        >
          Select Access Type
        </InputLabel>
        <Select
          value={activeOpt}
          onChange={(e) => handleChange(e.target.value)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ borderRadius: '5px' }}
          fullWidth
        >
          {AccessTypeOptions.map((opt) => {
            return (
              <MenuItem value={opt} key={opt}>
                {opt}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
};
