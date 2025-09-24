import React from 'react';
import { Box, Tabs, Tab, Tooltip as MuiTooltip } from '@mui/material';

/**
 * A reusable, system-level component for lesson navigation tabs.
 * It is centered by default to ensure a consistent look and feel across all lessons.
 */
export default function LessonTabs({ activeTab, handleTabChange, sections = [] }) {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, display: 'flex', justifyContent: 'center' }}>
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="lesson sections tabs"
                // REMOVED: sx prop is no longer needed as styles are global
            >
                {sections.map(label => (
                    <MuiTooltip title={`View ${label} Section`} key={label} arrow>
                        <Tab label={label} />
                    </MuiTooltip>
                ))}
            </Tabs>
        </Box>
    );
}