const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../soundscape.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    mood TEXT NOT NULL,
    genre TEXT,
    link TEXT
  )`);

  console.log("✅ Songs table created successfully!");
});

db.close();
