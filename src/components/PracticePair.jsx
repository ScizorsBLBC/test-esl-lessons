import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/**
 * Displays a pair of practice words (e.g., "seat vs. sit").
 * @param {object} props - The component props.
 * @param {string} props.word1 - The first word.
 * @param {string} props.word2 - The second word.
 */
const PracticePair = ({ word1, word2 }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 0.5 }}>
      <Typography variant="body1" component="span" sx={{ fontWeight: 500, minWidth: '80px', textAlign: 'right', pr: 1 }}>
        {word1}
      </Typography>
      <Typography variant="body2" component="span" sx={{ color: 'text.secondary', px: 1 }}>
        vs.
      </Typography>
      <Typography variant="body1" component="span" sx={{ fontWeight: 500, minWidth: '80px', textAlign: 'left', pl: 1 }}>
        {word2}
      </Typography>
    </Box>
  );
};

export default PracticePair;