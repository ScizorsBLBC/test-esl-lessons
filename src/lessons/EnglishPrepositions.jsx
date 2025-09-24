import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid
} from '@mui/material';
import { prepositionData } from '../prepositionData.js'; // Import the new data
import ContentSelector from '../components/ContentSelector';
import LessonTabs from '../components/LessonTabs';

// --- Reusable Header Component ---
const Header = () => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
      English Prepositions
    </Typography>
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      What are Prepositions?
    </Typography>
  </Box>
);

// A simple HTML detail renderer is sufficient as all formatting is in the data file.
const genericDetailRenderer = (item) => item.details;

// --- Main Lesson Content ---
const MainContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (event, newValue) => setActiveTab(newValue);
    
    const sections = ["Introduction", "Place (Where?)", "Movement (Direction)", "Time (When?)", "Other Uses", "Practice"];

    // The ContentSelector is versatile and can be used for single items.
    const renderComparisonSection = (data) => (
        <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid item xs={12} sx={{ width: '100%', maxWidth: '1100px', flexGrow: 1, minHeight: 400 }}>
                <ContentSelector 
                    sectionData={[data]} // Pass the single item as an array
                    title={data.title}
                    description=""
                    detailRenderer={genericDetailRenderer}
                    preserveOrder
                />
            </Grid>
        </Grid>
    );
    

    return (
        <Box sx={{ width: '100%' }}>
            <LessonTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                sections={sections}
            />

            {/* Tab 0: Introduction */}
            {activeTab === 0 && renderComparisonSection({ 
                name: "Introduction", 
                title: prepositionData.introduction.title, 
                details: `<p>${prepositionData.introduction.description}</p>` 
            })}

            {/* Tab 1: Place */}
            {activeTab === 1 && <ContentSelector 
                sectionData={prepositionData.place} 
                title="Common Prepositions of Place" 
                description="These prepositions tell us WHERE something or someone is. The subject is in a fixed location." 
                detailRenderer={genericDetailRenderer} 
            />}

            {/* Tab 2: Movement */}
            {activeTab === 2 && (
                <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ContentSelector 
                        sectionData={prepositionData.movement} 
                        title="Common Prepositions of Movement" 
                        description="These prepositions tell us about the DIRECTION or path of movement." 
                        detailRenderer={genericDetailRenderer} 
                    />
                    {/* Render the special comparison after the main movement content */}
                    {renderComparisonSection(prepositionData.comparison)}
                </Grid>
            )}

            {/* Tab 3: Time */}
            {activeTab === 3 && <ContentSelector 
                sectionData={prepositionData.time} 
                title="Common Prepositions of Time" 
                description="These prepositions tell us WHEN something happens." 
                detailRenderer={genericDetailRenderer} 
                preserveOrder // Preserve the IN, ON, AT order for clarity
            />}

            {/* Tab 4: Other Uses (WITH/FOR) */}
            {activeTab === 4 && <ContentSelector 
                sectionData={prepositionData.other} 
                title="Other Useful Prepositions" 
                description="Prepositions can also describe manner, instrument, purpose, and duration." 
                detailRenderer={genericDetailRenderer} 
            />}
            
            {/* Tab 5: Practice */}
            {activeTab === 5 && (
                 <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                     <ContentSelector 
                        sectionData={prepositionData.homework} 
                        title="Let's Practice!" 
                        description="It's your turn to try! Select an activity below." 
                        detailRenderer={genericDetailRenderer} 
                        preserveOrder 
                    />
                    {/* REMOVED DUPLICATION: The tips are already rendered via ContentSelector/prepositionData.homework */}
                    {/* {renderComparisonSection(prepositionData.homework.find(item => item.topic === 'Tips'))} */}
                </Grid>
            )}
        </Box>
    );
};

// --- Main Exported Component ---
export default function EnglishPrepositions() {
  useEffect(() => {
    document.title = 'English Prepositions | ESL Lessons';
  }, []);

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 4, md: 6 } }}>
      <Header />
      <MainContent />
    </Box>
  );
}