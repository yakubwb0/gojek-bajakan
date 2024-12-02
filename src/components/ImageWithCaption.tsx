import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

const ImageWithCaption = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '900px', // You can adjust the height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <Image
        src="/images/your-image.jpg" // Replace with the correct path to your image
        alt="Gojek Platform"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* Caption Overlay */}
      <Box
        sx={{
          position: 'absolute',
          color: 'white',
          textAlign: 'left', // Align text to the left
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black background
          borderRadius: '10px',
          left: '100px', // Position from the left side
          bottom: '400px', // Position from the bottom to center it
          width: '100%', // Ensure it spans the entire width for left alignment
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '52px', // Increased font size
            lineHeight: '1.4', // Optional: Adjust line height for better readability
          }}
        >
          3 countries. 20+ products. 1
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '52px', // Increased font size
            lineHeight: '1.4', // Optional: Adjust line height for better readability
          }}
        >
          leading on-demand platform.
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageWithCaption;
