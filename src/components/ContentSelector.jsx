import React, { useState, useMemo } from 'react';
import {
    Box, Typography, Grid, Button, Stack, Tooltip as MuiTooltip, Fade
} from '@mui/material';
import DetailCard from './DetailCard';

// --- Main Modular Component ---
export default function ContentSelector({ sectionData = [], title, description, detailRenderer, tables = [], preserveOrder = false }) {
    const dataKey = sectionData[0]?.topic ? 'topic' : 'name';
    const sortedData = useMemo(() => (
        preserveOrder ? sectionData : [...sectionData].sort((a, b) => (a[dataKey] || a.title).localeCompare(b[dataKey] || b.title))
    ), [sectionData, dataKey, preserveOrder]);

    const [selectedItem, setSelectedItem] = useState(sortedData[0]);

    React.useEffect(() => {
        setSelectedItem(sortedData[0]);
    }, [sortedData]);

    return (
        <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom>{title}</Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px' }}>
                <Stack direction="row" justifyContent="center" flexWrap="wrap">
                    {sortedData.map(item => (
                         <MuiTooltip title={`View details for ${item.title || item.topic || item.name}`} key={item.title || item.topic || item.name} arrow>
                            <Button
                                variant={selectedItem === item ? 'contained' : 'outlined'}
                                onClick={() => setSelectedItem(item)}
                                sx={{ m: 1 }} // REMOVED: All styling except margin is now in the global theme.
                            >
                                {item.title || item.topic || item.name}
                            </Button>
                        </MuiTooltip>
                    ))}
                </Stack>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px', flexGrow: 1 }}>
                <Fade in={!!selectedItem} key={selectedItem ? selectedItem.title || selectedItem.topic || selectedItem.name : 'empty'}>
                    <Box sx={{ minHeight: 400, height: '100%' }}>
                        {selectedItem && <DetailCard content={detailRenderer(selectedItem)} />}
                    </Box>
                </Fade>
            </Grid>
            {tables}
        </Grid>
    );
};