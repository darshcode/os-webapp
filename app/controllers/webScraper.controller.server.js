const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite() {
  try {
    // Make a GET request to the website
    const response = await axios.get('https://example.com');
    
    // Load the HTML body into cheerio
    const $ = cheerio.load(response.data);

    // Define the selector for the titles
    const titleSelector = 'h2';

    // Extract titles
    const titles = [];
    $(titleSelector).each((index, element) => {
      const title = $(element).text();
      titles.push(title);
    });

    // Log the titles
    console.log('Titles:', titles);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function to initiate the scraping
scrapeWebsite();
