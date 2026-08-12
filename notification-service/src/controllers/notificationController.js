const healthCheck = (req, res) => {
  res.json({
    service: "notification-service",
    status: "healthy"
  });
};

module.exports = {
  healthCheck
};