// Import the 'express' module and create an instance of the Express application
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import various utility functions for working with data
const { getElementById, getIndexById, updateElement, seedElements, createElement } = require('./utils');

// Initialize empty arrays for 'expressions' and 'animals'
const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

// Define the port for the server, using the environment variable or default to 4001
const PORT = process.env.PORT || 4001;

// Define routes and their corresponding handlers

// Get all expressions
app.get('/expressions', (req, res, next) => {
    res.send(expressions);
});

// Get a specific expression by ID
app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
        res.send(foundExpression);
    } else {
        res.status(404).send();
    }
});

// Update an expression by ID
app.put('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
        updateElement(req.params.id, req.query, expressions);
        res.send(expressions[expressionIndex]);
    } else {
        res.status(404).send();
    }
});

// Create a new expression
app.post('/expressions', (req, res, next) => {
    const receivedExpression = createElement('expressions', req.query);
    if (receivedExpression) {
        expressions.push(receivedExpression);
        res.status(201).send(receivedExpression);
    } else {
        res.status(400).send();
    }
});

// Delete an expression by ID
app.delete('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
        expressions.splice(expressionIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

// Define routes for 'animals' with similar CRUD operations as expressions

// Start the server, listen on the defined port, and log a message
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
