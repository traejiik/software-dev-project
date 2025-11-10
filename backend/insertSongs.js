const sqlite3 = require('sqlite3').verbose();
const songsList = require('./allSongs');

const db = new sqlite3.Database('../soundscape.db'); // point to your DB

db.serialize(() => {
  songsList.forEach(song => {
    const { title, artist, mood, genre, link } = song;
    db.run(`INSERT INTO songs (title, artist, mood, genre, link) VALUES (?, ?, ?, ?, ?)`,
      [title, artist, mood, genre, link],
      (err) => {
        if (err) console.error("Insert error:", err.message);
      }
    );
  });
});

console.log('All songs inserted!');
db.close();
