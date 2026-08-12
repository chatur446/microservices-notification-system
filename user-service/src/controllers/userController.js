const healthCheck = (req, res) => {
  res.json({
    service: "user-service",
    status: "healthy"
  });
};

module.exports = {
  healthCheck
};