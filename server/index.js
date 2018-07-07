const express = require('../../../Library/Caches/typescript/2.9/node_modules/@types/express');
const morgan = require('../../../Library/Caches/typescript/2.9/node_modules/@types/morgan');
const path = require('path');
const axios = require('axios');
const parser = require('../../../Library/Caches/typescript/2.9/node_modules/@types/body-parser');
const apiKey = require('./apiKey')

const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT);
app.use(morgan('tiny'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/public/')))

app.get('/api/dogs', (req, res) => {
  axios({
    method: 'GET',
    url: `http://api.petfinder.com/pet.find`,
    params: {
      key: apiKey,
      format: 'json',
      location: 94158,
    }})
  .then((response) => {
    res.send({
      data: response.data.petfinder.pets,
    });
  })
  .catch( err => console.log(err));
});