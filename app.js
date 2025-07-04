const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello First time docker");
});

app.listen(1000, '0.0.0.0', () => {
  console.log("Server Started");
});
