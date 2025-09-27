// This is our secure serverless function.
// It runs on Netlify's servers, not in the user's browser.

// Using require syntax for Node.js environment
const fetch = require('node-fetch');

// Accessing the secure environment variables set in the Netlify UI
const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID } = process.env;

// The main function handler
exports.handler = async (event) => {
  // Extract the specific Airtable path from the incoming request
  // e.g., if the app requests '/api/airtable/tblJCyV4DsxJnB6Ar', 
  // the 'endpoint' will be 'tblJCyV4DsxJnB6Ar'
  const endpoint = event.path.replace('/api/airtable/', '');
  const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${endpoint}`;

  try {
    const response = await fetch(airtableUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // If Airtable returns an error, pass it along
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Airtable error: ${response.statusText}` }),
      };
    }

    const data = await response.json();

    // Success! Return the data from Airtable to our React app.
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error in serverless function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'There was an internal error. Please check the function logs.' }),
    };
  }
};