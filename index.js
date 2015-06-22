var express = require('express'),
  router = express.Router(),
  jsonPayload = require('./payload');

router.get('/healthcheck', function (req, res, next) {
  res.status(200).json({
    "message": "Up and running",
    "endpoints": jsonPayload.endpoints()
  });
});



router.get('*', function (req, res) {
  jsonPayload.getPayload(req.originalUrl, function (jsonPayload) {
    res.status(200).json(jsonPayload);
  });
});

module.exports = router;
