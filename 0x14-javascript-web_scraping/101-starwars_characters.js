#!/usr/bin/node
const process = require('process');
const request = require('request');

const url = 'https://swapi-api.alx-tools.com/api/films/';
const movieId = process.argv[2];

request(`${url}${movieId}`, (error, response, body) => {
  if (error) console.log(error);
  const movie = JSON.parse(body);
  movie.characters.forEach((actor) => {
    request(actor, (error, response, body) => {
      if (error) {
        console.log(error);
        return error;
      }
      console.log(JSON.parse(body).name); // Print the HTML for the Google homepage.
    });
  });
  // console.log(movie.characters);
});
