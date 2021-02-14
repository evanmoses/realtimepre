const mongoose = require('mongoose');

const rangeSchema = new mongoose.Schema({
  heroPos: String,
  vilPos: String,
  facing: String,
  betRange: [{
    hand: String,
    foldFreq: Number,
    callFreq: Number,
    raiseFreq: Number,
    jamFreq: Number,
  }],
});

const Range = mongoose.model('Range', rangeSchema);

module.exports = Range;
