var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res, next) {
  res.json({
    "eleve1": "Moi",
    "eleve2": "Gilles",
    "eleve3": "Pierre-Louis"
  });
});



module.exports = router;
