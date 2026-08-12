const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});