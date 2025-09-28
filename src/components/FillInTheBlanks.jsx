import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const FillInTheBlanks = ({ data }) => {
  const { sentence, answers } = data;
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState({ message: '', color: '' });

  const checkAnswer = () => {
    if (answers.map(a => a.toLowerCase()).includes(userInput.toLowerCase().trim())) {
      setFeedback({ message: 'Correct!', color: 'success.main' });
    } else {
      setFeedback({ message: 'Not quite, try again!', color: 'error.main' });
    }
  };

  const sentenceParts = sentence.split('_______');

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
      <Typography component="span">{sentenceParts[0]}</Typography>
      <TextField
        variant="outlined"
        size="small"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
          setFeedback({ message: '', color: '' });
        }}
        sx={{ width: '150px' }}
      />
      <Typography component="span">{sentenceParts[1]}</Typography>
      <Button variant="contained" onClick={checkAnswer}>Check</Button>
      {feedback.message && <Typography sx={{ color: feedback.color, ml: 2 }}>{feedback.message}</Typography>}
    </Box>
  );
};

export default FillInTheBlanks;
