const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

pool.on("error", (error) => {
  console.error("Unexpected PostgreSQL error:", error);
});

const testDatabaseConnection = async () => {
  const client = await pool.connect();

  try {
    const result = await client.query("SELECT NOW() AS current_time");

    console.log("PostgreSQL connection established");
    console.log("Database time:", result.rows[0].current_time);
  } finally {
    client.release();
  }
};

module.exports = {
  pool,
  testDatabaseConnection,
};