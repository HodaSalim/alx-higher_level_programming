#!/usr/bin/node
const process = require("node:process");
const fs = require("node:fs");
// argument index is 2
const file = process.argv[2];
fs.readFile(file, { encoding: "utf-8" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
console.log(file);
