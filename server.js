const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = 'AIzaSyCYMf8RE0nU02AT6yYCO8L28rBHf3g37fI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent';


app.post('/api/generate-content', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response content';
    res.json({ text: generatedText });
  } catch (error) {
    console.error('API Error:', error.response ? error.response.data : error.message);
    res.status(500).json({
      error: 'Failed to generate content',
      details: error.response ? error.response.data : error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

