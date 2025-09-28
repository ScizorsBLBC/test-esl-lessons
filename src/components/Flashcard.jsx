import React, { useState } from 'react';
import { Paper, Box, Typography } from '@mui/material';

const Flashcard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Box
      sx={{
        perspective: '1000px',
        width: '300px',
        height: '200px',
        cursor: 'pointer',
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
        }}
      >
        {/* Front of card */}
        <Box
          sx={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotateY(0deg)',
          }}
        >
          <Box sx={{ width: '100%', textAlign: 'center', maxWidth: '280px' }}>
            {React.isValidElement(frontContent) ? (
              frontContent
            ) : (
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                {frontContent}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Back of card */}
        <Box
          sx={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotateY(180deg)',
            p: 2,
          }}
        >
          <Box sx={{ width: '100%', textAlign: 'center', maxWidth: '280px', zIndex: 1 }}>
            {React.isValidElement(backContent) ? (
              backContent
            ) : (
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {backContent}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Flashcard;
