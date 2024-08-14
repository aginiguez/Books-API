const express = require('express');
const mongoose = require('mongoose');
const app = express();

// CONFIG/MIDDLEWARE
require('dotenv').config();
const PORT = process.env.PORT || 3300; // Default to port 3300 if not specified
app.use(express.json());

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// ROOT ROUTE
app.get('/', (req, res) => {
    res.send('Hello World');
});

// BOOKS ROUTES
const booksController = require('./controllers/books_controller');
app.use('/books', booksController);

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});