// require('dotenv').config();
// const express = require('express');
// const passport = require('../config/ppConfig');
// // const ejsLayouts = require('express-ejs-layouts');
// const db = require('../models');
// const router = express.Router();
// const axios = require('axios');
// const fs = require('fs');
// const isLoggedIn = require('../middleware/isLoggedIn');

// // GET
// // get route for listing all meal plans
// // get route showing single meal plan details
// // views for get routes
// // post route for creating meal plan

// router.get('/:id', (req, res) => {
//     // Example of many to many from employee side
//     // db.employee.findAll({
//     //     include: [db.store]
//     // }).then(employees => {
//     //     console.log(employees);
//     // })
//     db.meal_plan.findOne({
//         where: { id: req.params.id },
//         include: [db.recipe]
//     }).then((mealPlanRecipes) => {
//         res.render('meal_plan', {
//             meal_plan: {
//                 userId: mealPlanRecipes.userId,
//                 type_of_meal: mealPlanRecipes.type_of_meal,
//                 meal_date: mealPlanRecipes.meal_date,
//             }
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// });


// // SHOW Route
// router.get('/:idx', (req, res) => {
//     //const birds = fs.readFileSync('./birds.json');
//     const meal_planData = JSON.parse(meal_plans);
//     let meal_planIndex = parseInt(req.params.idx);
//     res.render('meal_plan/show', { myMeal_plan: meal_planData[meal_planIndex] });
// });


// // POST



// // PUT


// // DELETE

// module.exports = router;