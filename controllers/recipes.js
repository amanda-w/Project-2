require('dotenv').config();
const express = require('express');
const passport = require('../config/ppConfig');
// const ejsLayouts = require('express-ejs-layouts');
const db = require('../models');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const isLoggedIn = require('../middleware/isLoggedIn');
const { randWeekday } = require('@ngneat/falso');


// GET

router.get('/', isLoggedIn, async (req, res) => {
    // get all recipes from db
    let recipes = await db.recipe.findAll();
    recipes = recipes.map(r => r.toJSON()); // removes all unnecessary data
    console.log(recipes); // this shows all recipe data -> previous values
    // render the (recipes/index) page
    res.render('recipes/index', { recipes: recipes });
})

router.get('/search', isLoggedIn, (req, res) => {
    res.render('recipes/search');
});


router.get('/results', isLoggedIn, async (req, res) => {
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
});

router.get('/:id', async (req, res) => {
    // print recipe to verify
    let recipe = await db.recipe.findOne({
        where: { id: req.params.id }
    });
    recipe = recipe.toJSON();
    console.log('*** this is show route ***');
    console.log(recipe);
    // go to db and grab 1 recipe
    // render recipe/show page w/ recipe
    res.render('recipes/show', { recipe: recipe });
});


// POST

router.post('/new', isLoggedIn, async (req, res) => {
    // print req.body to view form input
    console.log('******************************');
    console.log('FORM', req.body);
    console.log('******************************');
    // create recipe (for db)
    const newRecipe = await db.recipe.create({
        userId: req.user.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image
    });
    console.log(newRecipe.toJSON());
    // res.redirect to all fave recipes
    res.redirect('/recipes');
});


// DELETE

module.exports = router;