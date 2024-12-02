import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image'; // If using Next.js

const ScaleSection = () => {
  const items = [
    {
      title: '190 million+',
      description: 'app downloads since 2015',
      bgColor: '#7CCC6C',
      shadow: '0 0 32px 10px rgba(178,229,184,1)',
      imageSrc: '/images/scale-1.png', // Replace with your image path
    },
    {
      title: '2 million+',
      description: 'driver partners',
      bgColor: '#D48BC8',
      shadow: '0 0 32px 10px rgba(208,180,212,1)',
      imageSrc: '/images/scale-2.png', // Replace with your image path
    },
    {
      title: '900,000+',
      description: 'GoFood merchants',
      bgColor: '#FFAE62',
      shadow: '0 0 32px 10px rgba(255,174,98,1)',
      imageSrc: '/images/scale-3.png', // Replace with your image path
    },
    {
      title: '2.448x',
      description: 'jump in downloads from 2015 to 2020',
      bgColor: '#4AC9E3',
      shadow: '0 0 32px 10px rgba(178,230,242,1)',
      imageSrc: '/images/scale-4.png', // Replace with your image path
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'white', // Section background
        padding: '80px 20px',
        textAlign: 'center',
        zIndex: '2',
      }}
    >
      {/* Section Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          marginBottom: '40px', // Increased margin for visibility
          color: 'black', // Text color for better visibility
          position: 'relative',
          zIndex: '5', // Ensure the text is above other elements
        }}
      >
        We scale like a dream
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
            backgroundColor: '#2E8F3A', // Slightly darker green on hover
          },
        }}
      >
        Scale with us
      </Button>

      {/* Container for responsive layout */}
      <Container sx={{ marginTop: '40px' }}>
        {/* Flexbox Container */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px', // Space between items
            marginTop: '20px',
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: item.bgColor, // Individual background color
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'left',
                maxWidth: '200px',
                width: {
                  xs: '100%',  // Full width for mobile
                  sm: 'calc(50% - 40px)', // Two items per row on small screens
                  md: 'calc(25% - 40px)', // Four items per row on larger screens
                },
                boxShadow: item.shadow, // Individual shadow color
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'bottom',
                marginTop: '20px',
                height: '350px',
                marginLeft: '20px',
                marginRight: '20px',
                zIndex: '2',
              }}
            >
              {/* Image */}
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={400} // Adjust image width
                height={400} // Adjust image height
                style={{
                  marginBottom: '20px',
                  position: 'relative',
                  bottom: '50px', // Lowered the image
                  left: '12%',
                  width: '120%',
                  height: 'auto',
                  display: 'flex',
                  overflow: 'visible',
                  zIndex: '2',
                }}
              />
              {/* Title */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: '-60px', // Adjusted the margin to create space for the image
                  fontSize: {
                    xs: '24px',  // Smaller title font size on mobile
                    sm: '36px',  // Larger font on small screens
                    md: '44px',  // Even larger font on medium screens
                  },
                  position: 'relative',
                  zIndex: '2',
                }}
              >
                {item.title}
              </Typography>
              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'black',
                  fontSize: {
                    xs: '14px', // Smaller text on mobile
                    sm: '18px', // Larger text on small screens
                    md: '20px', // Even larger on medium screens
                  },
                  position: 'relative',
                  zIndex: '2',
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ScaleSection;
