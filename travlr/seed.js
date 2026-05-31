const fs = require('fs');
const mongoose = require('./app_server/models/db');
const Trip = require('./app_server/models/travlr');

const trips = JSON.parse(
    fs.readFileSync('./data/trips.json', 'utf8')
);

const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);

        console.log('Database seeded successfully');
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();