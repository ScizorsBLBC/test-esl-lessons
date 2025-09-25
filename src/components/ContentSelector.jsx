// src/components/ContentSelector.jsx

import React, { useState, useMemo, useEffect } from 'react';
import { Box, Typography, Grid, Button, Stack, Tooltip as MuiTooltip, Fade } from '@mui/material';
import DetailCard from './DetailCard';

export default function ContentSelector({ 
  sectionData = [], 
  title, 
  description, 
  detailRenderer, 
  tables = [], 
  preserveOrder = false,
  // --- PROPS FOR CONTROLLED MODE ---
  onItemSelect,       
  selectedItem,       
  hideDetailView = false 
}) {
    const isArray = Array.isArray(sectionData);
    const dataToProcess = isArray ? sectionData : [sectionData];
    const dataKey = dataToProcess[0]?.topic ? 'topic' : 'name';
    
    const sortedData = useMemo(() => (
        preserveOrder ? dataToProcess : [...dataToProcess].sort((a, b) => (a[dataKey] || a.title).localeCompare(b[dataKey] || b.title))
    ), [dataToProcess, dataKey, preserveOrder]);

    // Internal state for uncontrolled mode
    const [internalSelectedItem, setInternalSelectedItem] = useState(sortedData[0]);

    // Determine if component is controlled or uncontrolled
    const isControlled = selectedItem !== undefined && onItemSelect !== undefined;
    const currentItem = isControlled ? selectedItem : internalSelectedItem;

    const handleSelect = (item) => {
      if (!isControlled) {
        setInternalSelectedItem(item);
      }
      if (onItemSelect) {
        onItemSelect(item);
      }
    };

    // Effect for uncontrolled mode to update its internal state
    useEffect(() => {
        if (!isControlled) {
            setInternalSelectedItem(sortedData[0]);
        }
    }, [sortedData, isControlled]);

    return (
        <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom>{title}</Typography>
                    {description && <Typography>{description}</Typography>}
                </Box>
            </Grid>
            
            {sortedData.length > 1 && (
                <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px' }}>
                    <Stack direction="row" justifyContent="center" flexWrap="wrap">
                        {sortedData.map(item => (
                             <MuiTooltip title={`View details for ${item.title || item.topic || item.name}`} key={item.title || item.topic || item.name} arrow>
                                <Button
                                    variant={currentItem === item ? 'contained' : 'outlined'}
                                    onClick={() => handleSelect(item)}
                                    // --- FIX: Restored the margin style property ---
                                    sx={{ m: 1 }}
                                >
                                    {item.title || item.topic || item.name}
                                </Button>
                            </MuiTooltip>
                        ))}
                    </Stack>
                </Grid>
            )}

            {/* Render internal DetailCard only if NOT in controlled/hidden mode */}
            {!hideDetailView && currentItem && detailRenderer && (
              <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px', flexGrow: 1 }}>
                  <Fade in={!!currentItem} key={currentItem ? currentItem.title || currentItem.topic || currentItem.name : 'empty'}>
                      <Box sx={{ minHeight: 400, height: '100%' }}>
                          <DetailCard content={detailRenderer(currentItem)} />
                      </Box>
                  </Fade>
              </Grid>
            )}
            {tables}
        </Grid>
    );
};