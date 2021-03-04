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

router.post('/', (req, res) => {
  const {
    heroPos, vilPos, facing, stackDepth, betRange,
  } = req.body;

  const rangeExists = Range.exists({
    heroPos, vilPos, facing, stackDepth,
  });

  const newRange = new Range({
    heroPos, vilPos, facing, stackDepth, betRange,
  });

  if (!rangeExists) {
    newRange.save();
  } else {
    Range.findOneAndDelete({
      heroPos, vilPos, facing, stackDepth,
    }).then(newRange.save());
  }
});

module.exports = router;
