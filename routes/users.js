import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users music. */
router.get('/music', function(req, res, next) {
  res.send('Drake, Travis, Weeknd');
});

/* GET users fav color. */
router.get('/color', function(req, res, next) {
  res.send('respond with blue, green');
});

export default router;
