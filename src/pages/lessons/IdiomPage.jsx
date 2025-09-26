import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Box, Typography, Fade } from '@mui/material';
import { idiomData } from '../../data/idiomData.js';
import ContentSelector from '../../components/ContentSelector';
import LessonTabs from '../../components/LessonTabs';
import DetailCard from '../../components/DetailCard';

// --- Helper Components ---
const Header = ({ lessonNumber }) => (
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
      Interactive Idioms: Lesson {lessonNumber}
    </Typography>
    <Typography variant="h6" sx={{ color: 'text.primary' }}>
      Learn the stories behind common English idioms.
    </Typography>
  </Box>
);

const FlashcardRenderer = (item) => `
    <div style="text-align: center;">
      <h3 style="font-size: 1.5em; font-weight: bold;">${item.idiom}</h3>
      <p><strong>Meaning:</strong> ${item.meaning}</p>
      <div style="margin-top: 1.5em; padding-top: 1em; border-top: 1px solid rgba(255,255,255,0.1);">
        <h4 style="margin-bottom: 0.5em;">Example Sentence:</h4>
        <p style="margin-top: 0;"><em>"${item.example}"</em></p>
      </div>
    </div>
`;

const StoryRenderer = (item) => `
    <div style="text-align: center;">
      <h3 style="font-size: 1.5em; font-weight: bold;">${item.idiom}</h3>
      <p><strong>The Story Behind It:</strong> ${item.story}</p>
    </div>
`;

// --- MODIFICATION: Replaced the placeholder with the fully functional interactive component ---
const ChallengeView = ({ lessonData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [feedback, setFeedback] = useState({ text: '', color: '' });
    const [showMeaning, setShowMeaning] = useState(false);
    const [shuffledChoices, setShuffledChoices] = useState([]);

    const challengeSentences = useMemo(() => [
        `I know he made a mistake, but it's his first day. Let's _______.`,
        `In this tourist town, souvenir shops are _______.`,
        `The weather is perfect for outdoor work, so we should _______ and finish the project.`
    ], []);

    const currentItem = lessonData.idioms[currentIndex];
    const currentChallengeSentence = challengeSentences[currentIndex];

    useEffect(() => {
        const newChoices = [...lessonData.idioms].sort(() => 0.5 - Math.random());
        setShuffledChoices(newChoices);
        setFeedback({ text: '', color: '' });
        setShowMeaning(false);
    }, [currentItem, lessonData.idioms]);

    const handleAnswer = (selectedIdiom) => {
        if (showMeaning) return;

        if (selectedIdiom === currentItem.idiom) {
            setFeedback({ text: 'Correct!', color: 'green' });
            setShowMeaning(true);
            setTimeout(() => {
                const nextIndex = (currentIndex + 1) % lessonData.idioms.length;
                setCurrentIndex(nextIndex);
            }, 2500);
        } else {
            setFeedback({ text: 'Not quite, try again!', color: 'red' });
            setTimeout(() => setFeedback({ text: '', color: '' }), 1500);
        }
    };

    const sentenceHTML = currentChallengeSentence.replace('_______', `<u style="text-decoration-style: dotted;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>`);
    
    const buttonHTML = shuffledChoices.map(choice => `
        <button 
            onclick="document.dispatchEvent(new CustomEvent('idiomChallengeAnswer', { detail: { idiom: \`${choice.idiom.replace(/'/g, "\\'")}\` } }))"
            style="padding: 12px 24px; border-radius: 8px; border: 1px solid; cursor: pointer; min-width: 150px; background-color: transparent; color: inherit; font-size: 1rem;"
        >${choice.idiom}</button>
    `).join('');

    const feedbackHTML = `<p style="margin-top: 2em; font-weight: bold; min-height: 24px; color: ${feedback.color};">${feedback.text}</p>`;
    const meaningHTML = showMeaning ? `<p style="margin-top: 1em; font-size: 1.1em;"><strong>${currentItem.idiom}:</strong> ${currentItem.meaning}</p>` : '';

    useEffect(() => {
        const eventListener = (event) => handleAnswer(event.detail.idiom);
        document.addEventListener('idiomChallengeAnswer', eventListener);
        return () => document.removeEventListener('idiomChallengeAnswer', eventListener);
    }, [shuffledChoices, currentIndex]);

    return (
        <DetailCard content={`
            <div style="text-align: center;">
                <h3 style="font-size: 1.5em; font-weight: bold; margin-bottom: 1em;">Complete the Conversation</h3>
                <p style="font-size: 1.2em; margin-bottom: 2em;"><em>${sentenceHTML}</em></p>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 1em;">
                    ${buttonHTML}
                </div>
                ${feedbackHTML}
                ${meaningHTML}
            </div>
        `} />
    );
};


// --- Main Page Component ---
export default function IdiomPage() {
    const { lessonId } = useParams();
    const [activeTab, setActiveTab] = useState(0);

    const activeLesson = useMemo(() => {
        const id = parseInt(lessonId, 10);
        return idiomData.lessons.find(l => l.lesson === id);
    }, [lessonId]);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        if (activeLesson) {
            document.title = `Idioms Lesson ${activeLesson.lesson} | ESL Lessons`;
        }
    }, [activeLesson]);

    if (!activeLesson) {
        return <Navigate to="/" replace />;
    }

    const viewModes = ["The Idioms", "Story Behind It", "Interactive Challenge"];

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
                    <ContentSelector
                        sectionData={activeLesson.idioms}
                        title={`Lesson ${activeLesson.lesson}: Idioms`}
                        description="Select an idiom to see its meaning and an example."
                        detailRenderer={FlashcardRenderer}
                        dataKey="idiom"
                    />
                )}

                {activeTab === 1 && (
                     <ContentSelector
                        sectionData={activeLesson.idioms}
                        title={`Lesson ${activeLesson.lesson}: Stories`}
                        description="Select an idiom to learn its origin story."
                        detailRenderer={StoryRenderer}
                        dataKey="idiom"
                    />
                )}

                {activeTab === 2 && (
                    <Fade in={true}>
                        <div>
                            <ChallengeView lessonData={activeLesson} />
                        </div>
                    </Fade>
                )}
            </Box>
        </Box>
    );
}