import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { keyframes } from '@emotion/react';

// The bounce animation is now part of this global component
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

export default function GlobalScrollIndicator() {
    const [showDownArrow, setShowDownArrow] = useState(false);
    const [showUpArrow, setShowUpArrow] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
            setShowUpArrow(window.scrollY > 30);
            setShowDownArrow(isScrollable && window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 30);
        };
        const observer = new MutationObserver(checkScroll);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
        window.addEventListener('scroll', checkScroll, { passive: true });
        window.addEventListener('resize', checkScroll);
        checkScroll();
        return () => {
            window.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {showDownArrow && (
                <Box sx={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', color: 'secondary.main', animation: `${bounce} 2s infinite`, zIndex: 1400, pointerEvents: 'none' }}>
                    <KeyboardArrowDownIcon fontSize="large" />
                </Box>
            )}
            {showUpArrow && (
                 <Box sx={{ position: 'fixed', top: 80, left: '50%', transform: 'translateX(-50%)', color: 'secondary.main', animation: `${bounce} 2s infinite reverse`, zIndex: 1400, pointerEvents: 'none' }}>
                    <KeyboardArrowUpIcon fontSize="large" />
                </Box>
            )}
        </>
    );
};