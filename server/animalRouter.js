const express = require('express');

const router = express.Router();
const axios = require('axios');
const apiKey = require('../api/apiKey');

router.get('/:type', (req, res) => {
  const { type } = req.params;
  let animal;
  if (type === 'Dogs') {
    animal = 'dog';
  } else if (type === 'Cats') {
    animal = 'cat';
  } else if (type === 'Birds') {
    animal = 'bird';
  } else if (type === 'Reptiles') {
    animal = 'reptile';
  } else if (type === 'Small & Furry') {
    animal = 'smallfurry';
  } else if (type === 'Barnyard') {
    animal = 'barnyard';
  } else {
    res.send({ data: null });
  }
  axios({
    method: 'GET',
    url: 'http://api.petfinder.com/pet.find',
    params: {
      key: apiKey,
      format: 'json',
      location: 94158,
      animal,
      output: 'full',
    },
  })
    .then((response) => {
      const pets = [];
      const list = ['name', 'age', 'size', 'breed', 'description', 'media'];
      response.data.petfinder.pets.pet.forEach((pet) => {
        const petData = {};
        list.forEach((category) => {
          if (pet[category]) {
            if (category !== 'media') {
              petData[category] = pet[category].$t;
            } else {
              petData[category] = pet[category].photos;
            }
          } else {
            petData[category] = {};
          }
        });
        pets.push(petData);
      });
      res.send({ pets });
    })
    .catch(err => console.log(err));
});

module.exports = router;
