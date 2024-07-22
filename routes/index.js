const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('index.html');
  });

router.route('/offer')
  .get((req, res) => {
    res.status(200).render('offer');
  });

router.route('/requirements')
  .get((req, res) => {
    res.status(200).render('requirements');
  });

router.route('*')
  .get((req, res) => {
    res.status(404).render('not_found');
  });

module.exports = router;