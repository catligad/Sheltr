const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
const animalRouter = require('./animalRouter');
const db = require('./db');

const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT);
app.use(morgan('tiny'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/public/')));
app.use('/api/pets', animalRouter);
app.use('/api/likedAnimals', db);
