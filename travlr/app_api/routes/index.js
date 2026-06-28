const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const ctrlAuth =
    require('../controllers/authentication');

router
    .route('/trips')
    .get(ctrlTrips.tripsList)
    .post(ctrlTrips.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(ctrlTrips.tripsFindByCode)
    .put(ctrlTrips.tripsUpdateTrip)
    .delete(ctrlTrips.tripsDeleteTrip);

router
    .route('/login')
    .post(ctrlAuth.login);

module.exports = router;