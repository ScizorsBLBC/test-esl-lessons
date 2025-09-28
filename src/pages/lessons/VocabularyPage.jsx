import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Box, Typography, Fade, Paper, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { vocabularyData } from '../../data/vocabularyData.js';
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';
import DetailCard from '../../components/DetailCard';

// --- Helper Components ---
const Header = ({ lessonNumber }) => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
      Interactive Vocabulary: Lesson {lessonNumber}
    </Typography>
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      Learn and practice your new words.
    </Typography>
  </Box>
);

const FlashcardRenderer = (item, theme) => `
    <div style="text-align: center;">
      <h3 style="font-size: 1.5em; font-weight: bold; color: ${theme.palette.text.primary};">${item.word}</h3>
      <p style="color: ${theme.palette.text.secondary};"><strong>Definition:</strong> ${item.definition}</p>
      <div style="margin-top: 1.5em; padding-top: 1em; border-top: 1px solid ${theme.palette.divider};">
        <h4 style="margin-bottom: 0.5em; color: ${theme.palette.text.primary};">Example Sentence:</h4>
        <p style="margin-top: 0; color: ${theme.palette.text.secondary};"><em>"${item.sampleSentence}"</em></p>
      </div>
    </div>
`;

const ChallengeView = ({ lessonData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState({ text: '', color: '' });
    const [showDefinition, setShowDefinition] = useState(false);
    const [shuffledChoices, setShuffledChoices] = useState([]);

    const currentItem = lessonData.words[currentIndex];

    useEffect(() => {
        const distractorWords = lessonData.words
            .filter(w => w.word !== currentItem.word)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.word);
        
        const newChoices = [currentItem.word, ...distractorWords].sort(() => 0.5 - Math.random());
        setShuffledChoices(newChoices);
        setFeedback({ text: '', color: '' });
        setShowDefinition(false);
    }, [currentItem, lessonData.words]);

    const handleAnswer = (selectedWord, theme) => {
        if (showDefinition) return;

        if (selectedWord === currentItem.word) {
            setFeedback({ text: 'Correct!', color: theme.palette.success.main });
            setShowDefinition(true);
            setTimeout(() => {
                const nextIndex = (currentIndex + 1) % lessonData.words.length;
                setCurrentIndex(nextIndex);
            }, 2500);
        } else {
            setFeedback({ text: 'Not quite, try again!', color: theme.palette.error.main });
            setTimeout(() => setFeedback({ text: '', color: '' }), 1500);
        }
    };

    const sentenceHTML = currentItem.challengeSentence.replace('_______', `<u style="text-decoration-style: dotted;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>`);
    
    const buttonHTML = shuffledChoices.map(choice => `
        <button
            onclick="document.dispatchEvent(new CustomEvent('challengeAnswer', { detail: { word: '${choice}' } }))"
            style="padding: 12px 24px; border-radius: 8px; border: 1px solid ${theme.palette.divider}; cursor: pointer; min-width: 150px; background-color: transparent; color: ${theme.palette.text.primary}; font-size: 1rem; transition: all 0.2s ease-in-out;"
            onmouseover="this.style.backgroundColor='${theme.palette.action.hover}'; this.style.transform='scale(1.02)';"
            onmouseout="this.style.backgroundColor='transparent'; this.style.transform='scale(1)';"
        >${choice}</button>
    `).join('');

    const feedbackHTML = `<p style="margin-top: 2em; font-weight: bold; min-height: 24px; color: ${feedback.color};">${feedback.text}</p>`;
    const definitionHTML = showDefinition ? `<p style="margin-top: 1em; font-size: 1.1em;"><strong>${currentItem.word}:</strong> ${currentItem.definition}</p>` : '';

    useEffect(() => {
        const eventListener = (event) => handleAnswer(event.detail.word, theme);
        document.addEventListener('challengeAnswer', eventListener);
        return () => document.removeEventListener('challengeAnswer', eventListener);
    }, [shuffledChoices, currentIndex, theme]);

    return (
        <DetailCard content={`
            <div style="text-align: center;">
                <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Contextual Sentence Challenge</h3>
                <p style="font-size: 1.2em; margin-bottom: 2em;"><em>${sentenceHTML}</em></p>
                <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1em;">
                    ${buttonHTML}
                </div>
                ${feedbackHTML}
                ${definitionHTML}
            </div>
        `} />
    );
};

// --- Main Page Component ---
export default function VocabularyPage() {
    const { lessonId } = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme();

    const activeLesson = useMemo(() => {
        const id = parseInt(lessonId, 10);
        return vocabularyData.lessons.find(l => l.lesson === id);
    }, [lessonId]);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        if (activeLesson) {
            document.title = `Vocabulary Lesson ${activeLesson.lesson} | ESL Lessons`;
        }
    }, [activeLesson]);

    if (!activeLesson) {
        return <Navigate to="/" replace />;
    }

    const viewModes = ["Flashcards", "Challenge", "Homework"];

    return (
        <Box sx={{ width: '100%' }}>
            <Header lessonNumber={activeLesson.lesson} />

            <LessonTabs
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                sections={viewModes}
            />

            <Box sx={{ mt: 4 }}>
                {activeTab === 0 && (
                    <Fade in={true} key={`lesson-${activeLesson.lesson}-flashcards`}>
                        <div>
                            <ContentSelector
                                sectionData={activeLesson.words}
                                title={`Lesson ${activeLesson.lesson}: Words`}
                                description="Select a word to see its definition and a sample sentence."
                                detailRenderer={FlashcardRenderer}
                                theme={theme}
                            />
                        </div>
                    </Fade>
                )}

                {activeTab === 1 && (
                     <Fade in={true} key={`lesson-${activeLesson.lesson}-challenge`}>
                        <div>
                            <ChallengeView 
                                lessonData={activeLesson}
                            />
                        </div>
                    </Fade>
                )}

                {activeTab === 2 && (
                    <Fade in={true} key={`lesson-${activeLesson.lesson}-homework`}>
                        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
                            <Paper sx={{ p: { xs: 3, sm: 4 } }}>
                                <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
                                    Homework Assignment
                                </Typography>
                                <Typography variant="body1" textAlign="center" paragraph>
                                    For your homework, please write each of the 10 words from this lesson in your notebook. Next to each word, write your own original sentence using the word correctly.
                                </Typography>
                                <Typography variant="body1" textAlign="center" paragraph sx={{ mb: 4 }}>
                                    We will review your sentences together in our next class.
                                </Typography>

                                <List>
                                    {activeLesson.words.map((wordObj) => (
                                        <ListItem key={wordObj.word} divider>
                                            <ListItemText
                                                primary={wordObj.word}
                                                secondary={wordObj.definition}
                                                primaryTypographyProps={{
                                                    fontSize: '1.25rem',
                                                    fontWeight: 'bold',
                                                    // --- MODIFICATION: Changed color to secondary ---
                                                    color: 'secondary.main',
                                                }}
                                                secondaryTypographyProps={{
                                                    textAlign: 'justify'
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Box>
                    </Fade>
                )}
            </Box>
        </Box>
    );
}