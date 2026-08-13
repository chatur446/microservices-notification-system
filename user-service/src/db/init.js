const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../../.env"),
});

const fs = require("fs");
const { pool } = require("../config/database");

const initializeDatabase = async () => {
  const schemaPath = path.join(__dirname, "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  try {
    await pool.query(schema);
    console.log("Database schema initialized successfully");
  } catch (error) {
    console.error("Database schema initialization failed:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

initializeDatabase();