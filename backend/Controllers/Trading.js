const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/tx", (req, res) => {
  const url = 'https://api.exchange.coinbase.com/transfers?limit=30&type=deposit';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': process.env.Coinbase_API_KEY
    }
  };
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
});

module.exports = router;
