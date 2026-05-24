const express = require('express');
const router = express.Router();

const ctrlTravlr = require('../controllers/traveller');

router.get('/', ctrlTravlr.homepage);
router.get('/about', ctrlTravlr.about);
router.get('/travel', ctrlTravlr.travel);
router.get('/rooms', ctrlTravlr.rooms);
router.get('/meals', ctrlTravlr.meals);
router.get('/news', ctrlTravlr.news);
router.get('/contact', ctrlTravlr.contact);

module.exports = router;