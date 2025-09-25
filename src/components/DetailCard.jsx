// src/components/DetailCard.jsx

import React from 'react';
import { Paper, Card, CardContent, Typography } from '@mui/material';

const DetailCard = React.forwardRef(({ content }, ref) => {
    return (
        // FIX: Removed minHeight to allow the card to size to its content.
        <Paper ref={ref} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Card sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <CardContent>
                    <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: content }}
                        sx={{
                            // FIX: Local text-align rules removed to allow the global theme to take control.
                            // Headings will be centered, and paragraphs will be justified.
                            '& .homework-email': {
                                backgroundColor: (theme) => theme.palette.action.hover,
                                borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                padding: '1rem',
                                marginTop: '1rem',
                                textAlign: 'left', // Keep homework blocks left-aligned for readability
                            },
                        }}
                    />
                </CardContent>
            </Card>
        </Paper>
    );
});

export default DetailCard;