const express = require('express');
const Range = require('../models/range.model.js');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  Range.findOne({
    heroPos: req.query.heroPos,
    vilPos: req.query.vilPos,
    facing: req.query.facing,
    stackDepth: req.query.stackDepth,
  }, (err, range) => {
    res.json(range);
  });
});

router.put('/', (req, res) => {
  const obj = req.body;
  console.log(req.body._id);
  console.log(req.body);
  const newRange = new Range({
    heroPos: req.body.heroPos,
    vilPos: req.body.vilPos,
    facing: req.body.facing,
    stackDepth: req.body.stackDepth,
    betRange: req.body.betRange,
  });
  if (!obj._id) {
    newRange.save();
  } else {
    const id = obj._id;
    Range.findOneAndDelete({ _id: id }, (error, object) => console.log(object));
    newRange.save();
  }
});

module.exports = router;
