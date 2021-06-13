const express = require('express');
const shortid = require('shortid');
const router = express.Router();

let urls = {};

router.use(express.json());

router.get('/', (req, res) => {
  res.send(urls);
});

router.get('/:id', (req, res) => {
  //res.send(urls[req.params.id]);
  //res.redirect(urls[req.params.id]);
  //console.log(urls[req.params.id]);
  //const red = `/urls/${urls[req.params.id].i}`;
  //console.log(red);
  res.send(urls[req.params.id]);

});

router.post('/', (req, res) => {
  const short = shortid.generate();
  urls[short] = 
  {
    "redirect" : `/urls/${short}`,
    "longUrl" : req.body.longUrl,
    "shortUrl" : `https://localhost:4000/urls/${short}`
  };
  res.send(urls[short]);
});

module.exports = router;