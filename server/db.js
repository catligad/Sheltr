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

router.get('/select/:username', (request, response) => {
  const { username } = request.params;
  const query = {
    text: 'SELECT * FROM animalsLikedByUsers where username = $1',
    values: [username],
  };
  client.query("select * from users where username = 'cat'")
    .then((res) => {
      console.log(res);
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
    text: 'INSERT INTO animalsLikedByUsers(id, animalid, username) VALUES ($1, $2, $3)',
    values: [joinId, req.body.id, req.body.username],
  };
  client.query(insertIntoAnimals)
    .then(() => {
      client.query(insertIntoAnimalsLikedByUsers)
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
