const { Client } = require('pg');

const cn = {
  host: 'localhost', // server name or IP address;
  port: 5432,
  database: 'pets',
  user: 'cat',
};

const client = new Client(cn);

client.connect();

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message); // Hello World!
  client.end();
});
