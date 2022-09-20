const axios = require('axios');
require('dotenv').config();


const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: {prefix: 'chicken soup'},
    headers: {
      'X-RapidAPI-Key': '7d36d7c816msh9ddba9269eee40ep1bf285jsn3c58876dc39c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });