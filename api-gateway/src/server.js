const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "healthy"
  });
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});