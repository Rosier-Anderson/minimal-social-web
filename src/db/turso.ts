"use server";

import { createClient } from "@libsql/client";
export default async function getDatabaseClient() {
  const turso = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });

  return turso;
}
const client = await getDatabaseClient();
// await client.executeMultiple(`DROP TABLE users;
// DROP TABLE threads`);
await client.executeMultiple(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    issuedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    avatar TEXT NOT NULL  DEFAULT "/images/profile.png"
  );
  CREATE TABLE IF NOT EXISTS threads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    images TEXT,
    issuedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
  )
`);

// import Database from "better-sqlite3";
// import path from "path";

// const dbFile = path.join(process.cwd(), "src", "db", "db.sqlite");

// export const db = new Database(dbFile);

// const query = `
//   CREATE TABLE users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     username TEXT NOT NULL UNIQUE,
//     email TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL,
//     createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
//   )
// `;
// db.exec(query);
// const data = [
//   {
//     username: "Anderson",
//     email: "andersonrosier0@gmail.com",
//     password: "12345678",
//   },
// ];
// const insertData = db.prepare(
//   "INSERT INTO users (username, email, password)  VALUES (?,?, ?)"
// );
// data.forEach((user) =>
//   insertData.run(user.username, user.email, user.password)
// );

// const query2 = "SELECT * FROM users";
// const users = db.prepare(query2).all();
// console.log(users);
