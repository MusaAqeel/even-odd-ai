const axios = require('axios');
require('dotenv').config();

function isOdd(number) {
    // Handle validation
    if (typeof number !== 'number') {
        console.error('Please provide a valid number');
        return null;
    }

    if (!process.env.OPENAI_API_KEY) {
        console.error('OpenAI API key is missing. Please set OPENAI_API_KEY in your environment variables.');
        return null;
    }

    // Make a synchronous HTTP request
    const result = require('sync-request')('POST', 'https://api.openai.com/v1/chat/completions', {
        json: {
            model: "gpt-4o",
            messages: [{ 
                
                role: "user", 
                content: `Is the number ${number} odd or even? Reply with just the word 'odd' or 'even'.` 
            }],
            temperature: 0.3
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
    });

    try {
        const response = JSON.parse(result.getBody('utf8'));
        return response.choices[0].message.content.trim().toLowerCase().includes('odd');
    } catch (error) {
        console.error('Error checking number. Please try again.');
        return null;
    }
}

module.exports = isOdd; 