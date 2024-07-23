const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

const { handleFormSubmit } = require('../controllers/api');

router.route('/submit')
  .post(handleFormSubmit);

module.exports = router;