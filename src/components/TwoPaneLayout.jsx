// src/components/TwoPaneLayout.jsx

import React from 'react';
import { Box, Paper, Fade } from '@mui/material';

/**
 * A responsive two-pane layout component.
 * On mobile (xs), it stacks panes vertically (pane1 on top).
 * On desktop (md), it places panes side-by-side.
 */
const TwoPaneLayout = ({ pane1, pane2 }) => {
  return (
    <Fade in={true}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, row on desktop
        gap: 4, 
        mt: 4, 
        alignItems: 'stretch' 
      }}>
        {/* Pane 1 (Text) */}
        <Paper sx={{ flex: 1, p: { xs: 2, sm: 3 }, order: 1 }}>
          {pane1}
        </Paper>

        {/* Pane 2 (Video) */}
        {pane2 && (
          <Paper sx={{ flex: 1, p: { xs: 2, sm: 3 }, order: 2 }}>
            {pane2}
          </Paper>
        )}
      </Box>
    </Fade>
  );
};

export default TwoPaneLayout;