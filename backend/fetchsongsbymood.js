const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../soundscape.db');

function getSongsByMood(mood, callback) {
  db.all(`SELECT * FROM songs WHERE mood = ?`, [mood], (err, rows) => {
    if (err) {
      console.error("Fetch error:", err.message);
      callback(err, null);
      return;
    }
    callback(null, rows); // rows is an array of song objects
  });
}

// Example usage:
getSongsByMood('happy', (err, songs) => {
  if (err) return;
  console.log("Songs for mood 'happy':");
  console.log(songs);
});

module.exports = getSongsByMood;
