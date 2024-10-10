const express = require('express');
const cors = require('cors');
const path = require('path');
const animalRoutes = require('../controllers/animals'); 
const userRoutes = require('../routes/userRoutes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const HOST = process.env.SERVER_HOST || 'localhost';

// CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files (index.html and other assets)
app.use(express.static(path.join(__dirname, '../frontend'))); 

// API routes, prefixed with /api
app.use('/api/animals', animalRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Catch-all route to serve the index.html for any other request
// This is useful for single-page applications (SPAs)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
app.listen(PORT, HOST, () => {
  console.log(`App listening at http://${HOST}:${PORT}`);
});
