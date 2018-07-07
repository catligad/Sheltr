import express from 'express';
import morgan from 'morgan';
import path from 'path';
import axios from 'axios';
import parser from 'body-parser';
import apiKey from './apiKey';

const PORT = process.env.PORT || 3000;
const app = express();
app.listen(PORT);
app.use(morgan('tiny'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/public/')));

app.get('/api/dogs', (req, res) => {
  axios({
    method: 'GET',
    url: 'http://api.petfinder.com/pet.find',
    params: {
      key: apiKey,
      format: 'json',
      location: 94158,
    },
  })
    .then((response) => {
      res.send({
        data: response.data.petfinder.pets,
      });
    })
    .catch(err => console.log(err));
});
