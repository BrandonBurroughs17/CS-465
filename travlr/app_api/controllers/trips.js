const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find();

        res.status(200).json(trips);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const tripsFindByCode = async (req, res) => {
    try {

        const trip = await Trip
            .find({ code: req.params.tripCode });

        if (!trip || trip.length === 0) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        res.status(200).json(trip);

    } catch (err) {
        res.status(500).json(err);
    }
};

const tripsAddTrip = async (req, res) => {

    try {

        const trip = await Trip.create(req.body);

        res.status(201).json(trip);

    } catch (err) {

        res.status(400).json(err);

    }
};

const tripsUpdateTrip = async (req, res) => {

    try {

        const trip = await Trip.findOne({
            code: req.params.tripCode
        });

        if (!trip) {
            return res.status(404).json({
                message: 'Trip not found'
            });
        }

        Object.assign(trip, req.body);

        await trip.save();

        res.status(200).json(trip);

    } catch (err) {

        res.status(500).json(err);

    }
};

const tripsDeleteTrip = async (req, res) => {

    try {

        await Trip.deleteOne({
            code: req.params.tripCode
        });

        res.status(204).json(null);

    } catch (err) {

        res.status(500).json(err);

    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};