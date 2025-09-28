require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure CORS for development (restrict in production)
app.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://esl-lessons.scizors.wtf']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// DeepL Translation API Proxy
app.post('/api/translate', async (req, res) => {
  const { text, target_lang } = req.body;

  if (!text || !target_lang) {
    return res.status(400).json({ error: 'Missing required fields: text and target_lang' });
  }

  try {
    const deeplApiKey = process.env.DEEPL_API_KEY;
    if (!deeplApiKey) {
      return res.status(500).json({ error: 'DeepL API key not configured' });
    }

    const response = await axios.post('https://api-free.deepl.com/v2/translate', {
      text: [text],
      target_lang: target_lang,
    }, {
      headers: {
        'Authorization': `DeepL-Auth-Key ${deeplApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error calling DeepL API:', error.response?.data || error.message);

    if (error.response?.status === 429) {
      res.status(429).json({ error: 'Translation quota exceeded. Please try again later.' });
    } else if (error.response?.status === 403) {
      res.status(403).json({ error: 'Invalid API key or unauthorized request.' });
    } else {
      res.status(500).json({ error: 'Translation service temporarily unavailable.' });
    }
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'ESL Lessons BFF Proxy'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 ESL Lessons BFF Proxy Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔒 DeepL API Key: ${process.env.DEEPL_API_KEY ? '✅ Configured' : '❌ Missing'}`);
});
