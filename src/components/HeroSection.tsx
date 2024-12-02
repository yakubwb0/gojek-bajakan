import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1A1A1A',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        zIndex: -1,
      }}
    >
      {/* Heading */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        We’re Gojek, the drivers of change
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#39B54A', // Gojek Green
          fontWeight: 'bold',
          padding: '10px 30px',
          fontSize: '15px',
          textTransform: 'none',
          borderRadius: '30px',
          '&:hover': {
        backgroundColor: '#32a046',
          },
        }}
      >
        Explore Careers
      </Button>
    </Box>
  );
};

export default HeroSection;
