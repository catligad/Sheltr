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
      // console.log(response.data.petfinder.pets.pet);
      const pets = [];
      const list = ['name', 'age', 'size', 'breeds', 'description', 'media', 'id'];
      response.data.petfinder.pets.pet.forEach((pet) => {
        const petData = {};
        list.forEach((category) => {
          if (pet[category]) {
            if (category !== 'media' && category !== 'breeds') {
              petData[category] = pet[category].$t;
            } else if (category === 'media') {
              petData[category] = pet[category].photos;
            } else if (category === 'breeds') {
              petData[category] = pet[category].breed;
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

// { options: {},
//     status: { '$t': 'A' },
//     contact:
//      { phone: [Object],
//        state: [Object],
//        address2: {},
//        email: [Object],
//        city: [Object],
//        zip: [Object],
//        fax: {},
//        address1: [Object] },
//     age: { '$t': 'Adult' },
//     size: { '$t': 'L' },
//     media: { photos: [Object] },
//     id: { '$t': '42094392' },
//     shelterPetId: { '$t': 'A107314' },
//     breeds: { breed: [Object] },
//     name: { '$t': 'A107314' },
//     sex: { '$t': 'M' },
//     description: {},
//     mix: { '$t': 'no' },
//     shelterId: { '$t': 'CA678' },
//     lastUpdate: { '$t': '2018-07-05T14:56:33Z' },
//     animal: { '$t': 'Small & Furry' }
