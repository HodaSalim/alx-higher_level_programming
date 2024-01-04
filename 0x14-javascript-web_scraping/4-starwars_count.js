#!/usr/bin/node
const process = require("process");
const request = require("request");

const url = process.argv[2];
request(url, (error, response, body) => {
  if (error) console.log(error);
  const movies = JSON.parse(body).results;
  let count = 0; // Print the HTML for the Google homepage.
  movies.forEach((movie) => {
    if (
      movie.characters.includes(
        "https://swapi-api.alx-tools.com/api/people/18/",
      )
    ) {
      count++;
    }
  });
  console.log(count);
});
