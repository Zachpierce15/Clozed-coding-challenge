var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET Users */
router.get('/', function(req, res, next) {
  const {pageNumber} = req.query;

  axios.get(`https://randomuser.me/api/?inc=name,email,location,picture,dob,phone&seed=${pageNumber}&page=${pageNumber}&results=500`)
  .then((data) => {
    res.send(data.data.results)
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;
