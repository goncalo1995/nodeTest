const express = require('express');
const router = express.Router();

/ GET home page. /
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express live' });
});


/lixo/
const testJSON = [
  {
    name: 'Gonçalo Pereira',
    username: 'O Boss'
  },
  {
    name: 'Jane Doe',
    username: 'JaneyCakes'
  }
];

router.get('/testjson', (req, res, next) => {
  res.json(testJSON)
});

module.exports = router;