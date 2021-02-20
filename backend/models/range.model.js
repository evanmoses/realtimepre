const mongoose = require('mongoose');

const rangeSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  stackDepth: Number,
  betRange: [{
    hand: String,
    foldFreq: Number,
    callFreq: Number,
    raise: [{
      freq: Number, size: Number,
    }],
  }],
});

const Range = mongoose.model('Range', rangeSchema);

module.exports = Range;
