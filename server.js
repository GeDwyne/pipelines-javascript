'use strict';

const express = require('express');

// Constants
const PORT = 3030;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello iTICKET User!\n');
});

app.get('/bye', (req, res) => {
  res.send('Goodbye iTICKET User!\n');
});

app.get('/weather', (req, res) => {
  res.send('Cloudy with a chance of lasagna\n');
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
