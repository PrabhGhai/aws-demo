// Import express
const express = require("express");

// Initialize the app
const app = express();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, First time on AWS EC2 with Node.js!");
});

// Start the server on port 1000 and bind to all IPs (important for EC2)
app.listen(1000, '0.0.0.0', () => {
  console.log("🚀 Server Started on http://<your-public-ip>:1000");
});

// Optional: log uncaught errors
process.on('uncaughtException', err => {
  console.error("Unhandled Error:", err);
});
