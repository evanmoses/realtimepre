const express = require('express');
const Range = require('../models/range.model.js');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  console.log(req.query.heroPos);
  console.log(req.query.vilPos);
  console.log(req.query.facing);
  console.log(req.query.stackDepth);
  Range.findOne({
    heroPos: req.query.heroPos,
    vilPos: req.query.vilPos,
    facing: req.query.facing,
    stackDepth: req.query.stackDepth,
  }, (err, range) => {
    res.json(range);
  });
});

module.exports = router;
