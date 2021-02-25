const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const testBackendRouter = require('./routes/testbackend');
const rangesRouter = require('./routes/ranges');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testbackend', testBackendRouter);
app.use('/ranges', rangesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

let mongoosePort = process.env.CLOUD_DB;
mongoosePort = process.env.LOCAL_DB;
mongoose.connect(mongoosePort, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const { connection } = mongoose;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
  //
  // const partial = [{
  //   hand: 'AA', foldFreq: 0, callFreq: 75, raise: [{ freq: 25, size: 100 }],
  // }, {
  //   hand: 'AKs', foldFreq: 0, callFreq: 0, raise: [{ freq: 100, size: 100 }],
  // }, {
  //   hand: 'AQs', foldFreq: 0, callFreq: 75, raise: [{ freq: 25, size: 100 }],
  // }, {
  //   hand: 'AJs', foldFreq: 50, callFreq: 50, raise: [{ freq: 0, size: 0 }],
  // },
  // ];
  //
  // const rest = range.reduce((result, hand, index) => {
  //   if (index > 3) {
  //     result.push({ hand });
  //   }
  //   return result;
  // }, []);
  //
  // const hands = partial.concat(rest);
  // console.log(hands);
  //
  // const newRange = new Range({
  //   heroPos: 'BTN',
  //   vilPos: 'CO',
  //   facing: '4BET',
  //   stackDepth: '100',
  //   betRange: hands,
  // });
  // // newRange.save();
});

module.exports = app;
