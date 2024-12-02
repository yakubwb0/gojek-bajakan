import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // If using Next.js Image component


const InfoSection = () => {
  return (
    <Box sx={{ backgroundColor: '#1A1A1A', color: 'white', padding: '40px 20px' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* First Item */}
        <Box
          sx={{
            textAlign: 'center',
            width: 'calc(25% - 20px)', // Adjust width for 4 items in a row
            minWidth: '200px',
            position: 'relative', // Ensure the background can be positioned properly
            zIndex: 1,
          }}
        >
          <Image
            src="/images/achievement-1.svg" // Replace with actual path to image
            alt="Fortune's favorite"
            width={150} // Adjust the image width
            height={150} // Adjust the image height
            style={{ display: 'block', margin: '0 auto' }} // Center the image
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: 'black',zIndex: 1 }}>
            Fortune’s favorite
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', color: 'black',zIndex: 1 }}>
            Southeast Asia’s only company to make it to Fortune’s ‘Change the World’ list twice.
          </Typography>
        </Box>

        {/* Second Item */}
        <Box
          sx={{
            textAlign: 'center',
            width: 'calc(25% - 20px)', // Adjust width for 4 items in a row
            minWidth: '200px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/achievement-2.svg" // Replace with actual path to image
            alt="7.1 billion contribution"
            width={150} // Adjust the image width
            height={150} // Adjust the image height
            style={{ display: 'block', margin: '0 auto' }} // Center the image
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: 'black',zIndex: 1 }}>
            $7.1 b contribution
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', color: 'black',zIndex: 1 }}>
            Value added to the Indonesian economy in 2019.
          </Typography>
        </Box>

        {/* Third Item */}
        <Box
          sx={{
            textAlign: 'center',
            width: 'calc(25% - 20px)', // Adjust width for 4 items in a row
            minWidth: '200px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/achievement-3.svg" // Replace with actual path to image
            alt="Tonne times greener"
            width={150} // Adjust the image width
            height={150} // Adjust the image height
            style={{ display: 'block', margin: '0 auto' }} // Center the image
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: 'black',zIndex: 1 }}>
            Tonne times greener
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', color: 'black',zIndex: 1}}>
            Saved 11.3 tonnes of plastic in cutlery since October 2020.
          </Typography>
        </Box>

        {/* Fourth Item */}
        <Box
          sx={{
            textAlign: 'center',
            width: 'calc(25% - 20px)', // Adjust width for 4 items in a row
            minWidth: '200px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Image
            src="/images/achievement-4.svg" // Replace with actual path to image
            alt="Digitising merchants"
            width={150} // Adjust the image width
            height={150} // Adjust the image height
            style={{ display: 'block', margin: '0 auto' }} // Center the image
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: 'black',zIndex: 1 }}>
            Digitising merchants
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', color: 'black',zIndex: 1}}>
            Resulted in 80% growth in number of GoFood merchants during pandemic.
          </Typography>
        </Box>
      </Box>

      {/* Curved white background below all items */}
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '100px 100px 0 0', // Curved top for the white background
          padding: '135px',
          marginTop: '40px',
          position: 'absolute',
          width: '100vw', // Adjust width for better responsiveness
          zIndex: 0, // Ensure it appears behind the content
          bottom: '-950px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
      </Box>
    </Box>
  );
};

export default InfoSection;
