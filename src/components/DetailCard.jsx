import React from 'react';
import { Paper, Card, CardContent, Typography } from '@mui/material';

const DetailCard = React.forwardRef(({ content }, ref) => {
    return (
        <Paper ref={ref} sx={{ height: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Card sx={{
                flexGrow: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardContent sx={{
                    margin: 'auto 0', // This centers the content block vertically for short content
                }}>
                    <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: content }}
                        sx={{
                            // 1. Default alignment for all text is now 'left'
                            textAlign: 'left',
                            // 2. Target the heading and the paragraph right after it to center them
                            '& h3, & h3 + p': {
                                textAlign: 'center',
                            },
                            // --- Styles for homework sections ---
                            '.homework-email': {
                                backgroundColor: (theme) => theme.palette.action.hover,
                                borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                padding: '1rem',
                                marginTop: '1rem',
                                color: (theme) => theme.palette.text.primary,
                            },
                        }}
                    />
                </CardContent>
            </Card>
        </Paper>
    );
});

export default DetailCard;