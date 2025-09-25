// src/pages/lessons/PronunciationPage.jsx

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { pronunciationData } from '../../data/pronunciationData.js';
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';

// --- Detail Renderer & Helpers for the single pane layout ---

const renderPracticeWords = (practiceWords) => {
  if (!practiceWords) return '';
  let content = '<h4 style="margin-top: 1.5em; margin-bottom: 0.5em;">Practice Words:</h4>';
  if (practiceWords.pairs) {
    const pairsHtml = practiceWords.pairs.map(p => `
      <div style="display: flex; justify-content: center; align-items: center; margin: 0.25em 0;">
        <span style="min-width: 80px; text-align: right; padding-right: 0.5em;">${p.word1}</span>
        <em style="opacity: 0.7; padding: 0 0.5em;">vs.</em>
        <span style="min-width: 80px; text-align: left; padding-left: 0.5em;">${p.word2}</span>
      </div>`).join('');
    return content + `<div style="text-align: center;">${pairsHtml}</div>`;
  }
  if (practiceWords.voiceless || practiceWords.voiced) {
    if (practiceWords.voiceless) content += `<p><strong>Voiceless ${practiceWords.voiceless.sound}:</strong> ${practiceWords.voiceless.words}</p>`;
    if (practiceWords.voiced) content += `<p><strong>Voiced ${practiceWords.voiced.sound}:</strong> ${practiceWords.voiced.words}</p>`;
    return content;
  }
  return content + `<p>${Array.isArray(practiceWords) ? practiceWords.join(', ') : practiceWords}</p>`;
};

const pronunciationDetailRenderer = (item) => {
  if (!item) return '';
  const { sounds, importance, howTo, practiceWords, videos } = item;
  const howToHtml = Array.isArray(howTo) ? howTo.map(step => `<p>${step}</p>`).join('') : `<p>${howTo || ''}</p>`;

  const textContent = `
    <p style="margin-top:0;"><strong>Sounds:</strong> ${sounds || 'General Technique'}</p>
    <h4 style="margin-top: 1.5em; margin-bottom: 0.5em;">Why it's important:</h4>
    <p style="margin-top:0;">${importance || ''}</p>
    ${howTo ? `<h4 style="margin-top: 1.5em; margin-bottom: 0.5em;">How to Make the Sound:</h4>${howToHtml}` : ''}
    ${renderPracticeWords(practiceWords)}
  `;

  // This section now checks for the new 'videos' array and maps over it
  const videoLinkContent = (videos && videos.length > 0) ? `
    <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.12);">
      <p style="font-size: 0.9em; font-style: italic; opacity: 0.8; margin-top: 0; margin-bottom: 1rem;">Note: Each lesson is followed by a short practice video.</p>
      ${videos.map(video => `
        <div style="margin-bottom: 1rem;">
          <h4 style="margin: 0 0 0.5rem 0;">${video.title}</h4>
          <a href="${video.url}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; padding: 8px 22px; background-color: #E91E63; color: white; text-decoration: none; border-radius: 8px; font-weight: 500; font-family: Roboto, sans-serif; transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <svg fill="currentColor" style="margin-right: 8px;" focusable="false" aria-hidden="true" viewBox="0 0 24 24" height="24" width="24"><path d="M10 16.5v-9l6 4.5z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
            Watch on YouTube
          </a>
        </div>
      `).join('')}
    </div>
  ` : '';

  return `<div>${textContent}${videoLinkContent}</div>`;
};

// --- Main Page Component ---

const PronunciationPage = () => {
  useEffect(() => { document.title = 'Pronunciation Guide | ESL Lessons'; }, []);

  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const sections = ["Vowels", "Consonants", "Rhythm", "Techniques"];
  const dataMap = [
    { name: "Vowel Sounds", data: pronunciationData.vowels },
    { name: "Consonant Sounds", data: pronunciationData.consonants },
    { name: "Rhythm and Melody", data: pronunciationData.rhythm },
    { name: "Practice Techniques", data: pronunciationData.techniques },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        American English Pronunciation Guide
      </Typography>
      
      <LessonTabs
        activeTab={activeTab}
        handleTabChange={handleTabChange}
        sections={sections}
      />

      <Box sx={{ mt: 4 }}>
        <ContentSelector
          key={sections[activeTab]} 
          sectionData={dataMap[activeTab].data}
          title={dataMap[activeTab].name}
          description="Select a sound below to view the lesson."
          detailRenderer={pronunciationDetailRenderer}
          preserveOrder={true}
        />
      </Box>
    </Container>
  );
};

export default PronunciationPage;