const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT);

app.use(express.static('./dist'));

app.use((req, res, next) => {
  res.sendFile(path.resolve('./dist/index.html'));
})

// A basic express app that handles the routing of the Complied Angular App
