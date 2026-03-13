const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Serve static files
app.use(express.static('public'));

// Home Route
app.get('/', (req, res) => {
    res.send("Hello, World!");
});

// About Route
app.get('/about', (req, res) => {
    res.send("This is the About Page");
});

// POST Route
app.post('/data', (req, res) => {
    const userData = req.body;
    res.json({
        message: "Data received successfully",
        data: userData
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});