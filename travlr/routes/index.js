var express = require('express');
var router = express.Router();

const ctrlTravlr = require('../app_server/controllers/traveller');

router.get('/', ctrlTravlr.homepage);
router.get('/travel', ctrlTravlr.travel);
router.get('/about', ctrlTravlr.about);
router.get('/rooms', ctrlTravlr.rooms);
router.get('/meals', ctrlTravlr.meals);
router.get('/news', ctrlTravlr.news);
router.get('/contact', ctrlTravlr.contact);

module.exports = router;