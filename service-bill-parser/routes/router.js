var express = require('express');
var router = express.Router();
var tess = require('../tesseract');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/fetchrecords', function (req, res) {
  const img = req.query.number;
  tess.getText(img, res);
});

module.exports = router;