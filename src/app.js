const express = require('express');
const app = express();
const urls = require('./urls');
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('URL Shortener!');
});

app.use('/urls', urls);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});