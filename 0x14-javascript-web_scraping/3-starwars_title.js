#!/usr/bin/node
const process = require('process');
const request = require('request');

const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(`${url}${id}`, (error, response, body) => {
  if (error) console.log(error);
  console.log(JSON.parse(body).title); // Print the HTML for the Google homepage.
});
