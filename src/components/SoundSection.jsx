import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// FIX: Corrected import paths to look in the current directory
import YouTubeEmbed from './YouTubeEmbed';
import PracticePair from './PracticePair';

/**
 * Renders a complete section for a specific pronunciation topic.
 */
const SoundSection = ({ data }) => {
  const {
    title,
    sounds,
    importance,
    howTo,
    practiceWords,
    videoId,
  } = data;

  return (
    <Card sx={{ my: 2, border: '1px solid', borderColor: 'divider' }}>
      <CardContent>
        {title && (
          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
        )}
        
        {sounds && (
          <Typography variant="h6" component="p" color="primary" gutterBottom>
            {sounds}
          </Typography>
        )}
        
        {videoId && <YouTubeEmbed videoId={videoId} />}

        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
          Why it's important:
        </Typography>
        <Typography variant="body1" paragraph>
          {importance}
        </Typography>

        {howTo && (
          <>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
              How to Make the Sound:
            </Typography>
            {Array.isArray(howTo) ? (
              howTo.map((step, index) => (
                <Typography key={index} variant="body1" paragraph>
                  {step}
                </Typography>
              ))
            ) : (
              <Typography variant="body1" paragraph>
                {howTo}
              </Typography>
            )}
          </>
        )}
        
        {practiceWords && (
          <>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 2 }}>
              Practice words:
            </Typography>
            {practiceWords.voiceless || practiceWords.voiced ? (
              <Box>
                {practiceWords.voiceless && (
                   <Typography variant="body1"><strong>Voiceless {practiceWords.voiceless.sound}:</strong> {practiceWords.voiceless.words}</Typography>
                )}
                {practiceWords.voiced && (
                   <Typography variant="body1"><strong>Voiced {practiceWords.voiced.sound}:</strong> {practiceWords.voiced.words}</Typography>
                )}
              </Box>
            ) : practiceWords.pairs ? (
              <Box sx={{ textAlign: 'center', mt: 1 }}>
                {practiceWords.pairs.map((pair, index) => (
                  <PracticePair key={index} word1={pair.word1} word2={pair.word2} />
                ))}
              </Box>
            ) : (
              <Typography variant="body1">
                {Array.isArray(practiceWords) ? practiceWords.join(', ') : practiceWords}
              </Typography>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SoundSection;