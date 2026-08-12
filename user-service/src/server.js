const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3001;

app.get("/health", (req, res) => {
  res.json({
    service: "user-service",
    status: "healthy"
  });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});