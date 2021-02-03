const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({ message: 'backend is working properly' });
});

module.exports = router;
