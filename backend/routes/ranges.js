const express = require('express');
const Range = require('../models/range.model.js');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  Range.find({}, (err, range) => {
    res.json(range);
  });
});

module.exports = router;
