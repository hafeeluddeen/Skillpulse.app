import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styling the card component
const ElegantCard = styled(Card)(({ theme }) => ({
  borderRadius: 25,
  display: 'flex',
  justifyContent: 'center',
  alignItems : 'center',
  height: '150px',
  width: '150px',
  border: `1px solid black`,
  background: 'white',
  margin: '10px',
  transition: 'transform 0.3s ease', // Transition on hover
  '&:hover': {
    transform: 'scale(1.05)', // Increase scale on hover
    cursor: 'pointer' 
  },
}));

export default function CustomCard({cardName}) {
  return (
    <ElegantCard variant="outlined">
      <Typography variant="h5" textAlign="center" component="div">
          {cardName===undefined || cardName==="" ? "NULL" : cardName}
      </Typography>
    </ElegantCard>
  );
}
