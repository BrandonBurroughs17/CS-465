const express = require('express');
const router = express.Router();

const ctrlTravlr = require('../controllers/traveller');

router.get('/', ctrlTravlr.homepage);
router.get('/about', ctrlTravlr.about);
router.get('/travel', ctrlTravlr.travel);

module.exports = router;