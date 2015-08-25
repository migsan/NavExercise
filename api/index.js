var express = require('express');
var router = express.Router();
var path = require('path');

var DATA_DIR = path.join(__dirname, '..', 'data');

router.get('*', function(req, res) {
  res.sendfile(path.join(DATA_DIR, req.url));
});

module.exports = router;
