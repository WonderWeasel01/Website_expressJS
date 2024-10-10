const express = require('express'); // Importer express
const path = require('path'); // Importer path
const router = express.Router(); // Opret en router

// Definerede ruter
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

router.get('/contact', (req, res) => { // Ret syntaksfejl her
    res.sendFile(path.join(__dirname, 'frontend', 'contact.html')); 
});

module.exports = router; // Eksporter routeren