#!/usr/bin/node
const process = require('process');
const request = require('request');

const url = process.argv[2];
const completedCounts = {};
request(url, (error, response, body) => {
  if (error) console.log(error);
  const tasks = JSON.parse(body);
  tasks.forEach((task) => {
    if (task.completed) {
      completedCounts[task.userId] = (completedCounts[task.userId] || 0) + 1;
    }
  });
  console.log(completedCounts);
});
