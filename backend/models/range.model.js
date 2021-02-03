const mongoose = require('mongoose');

const Schema = mongoose.schema;

const rangeSchema = new Schema({
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
