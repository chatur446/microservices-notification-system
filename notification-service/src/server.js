const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3002;

app.get("/health", (req, res) => {
  res.json({
    service: "notification-service",
    status: "healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});