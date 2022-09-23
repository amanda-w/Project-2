require('dotenv').config();
const express = require('express');
const passport = 
const ejsLayouts = require('express-ejs-layouts');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');

// GET

router.get('/search', (req, res) => {
    res.render('recipe/search');
});

router.post('/results', (req, res) => {
    // get back the search item
    console.log('>>>> SEARCH DATA', req.body);
    // use axios to find the results
    const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {from: '0', size: '20', tags: 'under_30_minutes'},
  headers: {
    'X-RapidAPI-Key': process.env.API_TOKEN,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};
    // render the recipes/results page

})

// const options = {
//   method: 'GET',
//   url: 'https://tasty.p.rapidapi.com/recipes/list',
//   params: {from: '0', size: '20', tags: 'under_30_minutes'},
//   headers: {
//     'X-RapidAPI-Key': '7d36d7c816msh9ddba9269eee40ep1bf285jsn3c58876dc39c',
//     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// POST


// PUT


// DELETE

module.exports = router;