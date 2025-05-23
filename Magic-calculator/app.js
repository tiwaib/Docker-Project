const express = require("express");
const path = require("path");

const app = express();

// Use port 8085 from environment variables or default to 8085
const PORT = process.env.PORT || 8085;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

