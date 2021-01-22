const express = require('express');
const app = express();


// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant',
    user: 'postgres'
};
  
  
app.get('/', function(req, res) {
    res.render('home', {
        pageTitle: 'Home',
        pageID: 'Home'
    });
});