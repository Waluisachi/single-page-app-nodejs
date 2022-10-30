const express = require('express');
const path = require('path');

// INITIALIZATION
const app = express();

// ?ROUTES
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
});

// SERVER
app.listen((process.env.PORT || 5005), () => console.log("Server running..."));
