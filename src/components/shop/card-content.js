import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardData } from './card-data';

export const CardView = ({ data, handleOpen }) => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <Grid container spacing={2}>
        {data.map((card, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <CardData cardInfo={card} handleOpen={handleOpen} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
