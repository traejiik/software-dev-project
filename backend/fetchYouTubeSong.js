const { google } = require('googleapis');
const youtube = google.youtube('v3');
require('dotenv').config(); // store API key in .env
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../soundscape.db');

const API_KEY = process.env.YOUTUBE_API_KEY; // put your key in .env

async function fetchAndInsertSongs(mood, maxResults = 10) {
  try {
    // 1. Fetch songs from YouTube
    const response = await youtube.search.list({
      key: API_KEY,
      part: 'snippet',
      q: `${mood} music`,
      type: 'video',
      maxResults: maxResults
    });

    const items = response.data.items;

    items.forEach(item => {
      const title = item.snippet.title;
      const artist = item.snippet.channelTitle;
      const link = `https://www.youtube.com/watch?v=${item.id.videoId}`;
      const genre = 'unknown'; // optional
      const songMood = mood;

      // 2. Insert into database
      db.run(`INSERT INTO songs (title, artist, mood, genre, link) VALUES (?, ?, ?, ?, ?)`,
        [title, artist, songMood, genre, link],
        (err) => {
          if (err) console.error('DB insert error:', err.message);
        }
      );
    });

    console.log(`Inserted ${items.length} ${mood} songs from YouTube.`);
  } catch (error) {
    console.error('YouTube API error:', error.message);
  }
}

// Example usage:
fetchAndInsertSongs('happy', 10);

module.exports = fetchAndInsertSongs;
