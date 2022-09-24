require('dotenv').config();
const express = require('express');
const passport = require('../config/ppConfig');
// const ejsLayouts = require('express-ejs-layouts');
const db = require('../models');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');

// GET

router.get('/search', (req, res) => {
    res.render('recipes/search');
});

// POST

router.get('/results', async (req, res) => {
    // get back the search item
    console.log('>>>> SEARCH DATA', req.body);
    // use axios to find the results
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {from: '0', size: '20', tags: 'under_30_minutes'},
        // params: { q: req.body.search },
        headers: {
            'X-RapidAPI-Key': process.env.API_TOKEN,
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    const response = await axios.request(options);
    console.log('hello, response >>>', response.data.results)
    
    // render the recipes/results page
    res.render('recipes/results', { recipes: response.data.results});
})


// PUT


// DELETE

module.exports = router;