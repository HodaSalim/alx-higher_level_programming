#!/usr/bin/node
const process = require('process');
const fs = require('fs');
const file = process.argv[2];
fs.readFile(file, 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
