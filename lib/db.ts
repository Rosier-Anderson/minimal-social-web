import Database from "better-sqlite3";
import path from "path";

const dbFile = path.join(process.cwd(), "db", "db.sqlite");

// Create or open the database
export const db = new Database(dbFile);

// Initialize table (only once)
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();
