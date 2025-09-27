import React from 'react';
import { Paper } from '@mui/material';

const GlassButtonWrapper = React.forwardRef(({ children, isActive = false, ...props }, ref) => {
    const baseStyles = {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        '&:hover': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
        },
    };

    const activeStyles = isActive ? {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.15))',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    } : {};

    return (
        <Paper
            elevation={0}
            ref={ref}
            sx={{
                ...baseStyles,
                ...activeStyles,
                ...props.sx
            }}
        >
            {children}
        </Paper>
    );
});

export default GlassButtonWrapper;