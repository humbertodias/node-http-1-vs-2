var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/minha_rota', function(req, res, next) {
  res.render('minha_rota', { title: 'Minha Rota' });
});


module.exports = router;
