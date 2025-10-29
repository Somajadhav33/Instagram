const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "your_postgres_connection_string_here",
  ssl: { rejectUnauthorized: false },
});

// Initialize DB
const initializeDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "User" (
        username VARCHAR(150) PRIMARY KEY,
        password VARCHAR(50)
      );
    `);
    console.log("✅ User table ready");
  } catch (error) {
    console.error("❌ Database initialization error:", error.message);
  }
};

// --- Routes ---

// Register user
app.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    await pool.query(`INSERT INTO "User"(username, password) VALUES($1, $2)`, [username, password]);
    console.log(`✅ New user added: ${username}`);
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("❌ Insert error:", error.message);
    res.status(500).json({ error: "Failed to insert user" });
  }
});

// --- Start server ---
app.listen(5000, async () => {
  await initializeDb();
  console.log("🚀 Server started on port 5000...");
});
