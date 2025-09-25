import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh', // Ensures the content is centered vertically on the screen
        textAlign: 'center',
        px: 2, // Adds padding on the sides for smaller screens
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 }, // Responsive padding
          borderRadius: '12px',
          maxWidth: '500px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2, // Adds space between elements
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            width: 56,
            height: 56,
          }}
        >
          <ContactMailIcon fontSize="large" />
        </Avatar>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Welcome!
        </Typography>
        <Typography 
          variant="h6" 
          component="p"
          sx={{ color: 'text.secondary' }} // Softer color for the instruction text
        >
          To access your learning materials, please reach out to Ryan C. for a direct link to the lesson you are looking for.
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;