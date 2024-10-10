// backend/controllers/animals.js
const express = require('express');
const router = express.Router();

const animals = []; // Array to store animals

// POST route to add a new animal
router.post('/', (req, res) => {
    const { name, species, age } = req.body;
    if (name && species && age) {
        const newAnimal = { id: Date.now(), name, species, age };
        animals.push(newAnimal);
        return res.status(201).json(newAnimal);
    }
    return res.status(400).json({ error: 'All fields are required.' });
});

// GET route to retrieve all animals
router.get('/', (req, res) => {
    res.json(animals);
});

// GET route to retrieve a specific animal by ID
router.get('/:id', (req, res) => {
    const animal = animals.find(a => a.id === parseInt(req.params.id));
    if (animal) {
        return res.json(animal);
    }
    return res.status(404).json({ error: 'Animal not found.' });
});

// PUT route to update an animal
router.put('/:id', (req, res) => {
    const { name, species, age } = req.body;
    const animalIndex = animals.findIndex(a => a.id === parseInt(req.params.id));
    if (animalIndex !== -1 && name && species && age) {
        animals[animalIndex] = { id: animals[animalIndex].id, name, species, age };
        return res.json(animals[animalIndex]);
    }
    return res.status(400).json({ error: 'All fields are required or animal not found.' });
});

// DELETE route to delete an animal
router.delete('/:id', (req, res) => {
    const animalIndex = animals.findIndex(a => a.id === parseInt(req.params.id));
    if (animalIndex !== -1) {
        animals.splice(animalIndex, 1);
        return res.status(204).send();
    }
    return res.status(404).json({ error: 'Animal not found.' });
});

// Example data to initialize
const addAnimal = (name, species, age) => {
    const newAnimal = { id: Date.now(), name, species, age };
    animals.push(newAnimal);
};

// Example animals
addAnimal("Leo", "Lion", 5);
addAnimal("Ellie", "Elephant", 10);
addAnimal("Zeb", "Zebra", 3);

module.exports = router;
