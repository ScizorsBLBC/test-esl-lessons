import React from 'react';
import { Paper } from '@mui/material';

const GlassButtonWrapper = React.forwardRef(({ children, ...props }, ref) => (
    <Paper
        elevation={0}
        ref={ref}
        sx={{
            p: 0,
            backgroundColor: 'transparent',
            borderRadius: '10px',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)'
            },
            ...props.sx
        }}
    >
        {children}
    </Paper>
));

export default GlassButtonWrapper;