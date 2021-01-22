const express = require('express');
const cors = require("cors");
const http = require('http');
const axios = require('axios');


const app = express();


// Database connection parameters:
// const config = {
//     host: 'localhost',
//     port: 5432,
//     database: 'restaurant',
//     user: 'postgres'
// };
 
app.use(cors());
 
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});
 
app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`),
);