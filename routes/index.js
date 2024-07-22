const express = require('express');
const router = express.Router();

router.route('/offer')
  .get((req, res) => {
    res.status(200).render('offer');
  });

router.route('/requirements')
  .get((req, res) => {
    res.status(200).render('requirements');
  });

module.exports = router;