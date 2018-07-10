const express = require('express');
const parser = require('body-parser');
const uuid = require('uuid/v4');

const router = express.Router();
const { Pool } = require('pg');

router.use(parser.json());

const cn = {
  host: 'localhost',
  database: 'postgres',
  port: 5432,
};

const client = new Pool(cn);

router.get('/select/:username', (req, res) => {
  const { username } = req.params;
  const selectFromAnimalsLikedByUsers = `
    SELECT animals.data, animalsLikedByUsers.id FROM animalsLikedByUsers 
    INNER JOIN animals ON animals.id = animalsLikedByUsers.animalid
    WHERE animalsLikedByUsers.username = '${username}' 
  `;
  client.query(selectFromAnimalsLikedByUsers)
    .then((response) => {
      res.status(200).send(response.rows);
    })
    .catch(err => console.log(err.stack));
});

router.post('/insert', (req, res) => {
  const joinId = uuid();
  const insertIntoAnimals = {
    text: 'INSERT INTO animals(id, data) VALUES ($1, $2) ON CONFLICT DO NOTHING',
    values: [req.body.id, req.body.likedAnimal],
  };
  const insertIntoAnimalsLikedByUsers = {
    text: 'INSERT INTO animalsLikedByUsers(id, animalid, username) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
    values: [joinId, req.body.id, req.body.username],
  };
  client.query(insertIntoAnimals)
    .then(() => {
      client.query(insertIntoAnimalsLikedByUsers)
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  res.status(200).send('Yay you liked a pet');
});

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM animalsLikedByUsers WHERE id = '${id}'`;
  client.query(query)
    .then(() => res.status(200).send('You deleted a pet :('))
    .catch(err => console.log(err));
});

module.exports = router;
