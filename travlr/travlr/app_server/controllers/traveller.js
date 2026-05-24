const trips = require('../../data/trips.json');

const homepage = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
        trips: [
            {
                name: 'Hawaii Adventure',
                length: '7 Days',
                price: '$1,999'
            },
            {
                name: 'Colorado Escape',
                length: '5 Days',
                price: '$1,299'
            },
            {
                name: 'European Explorer',
                length: '10 Days',
                price: '$3,499'
            }
        ]
    });
};

const about = (req, res) => {
    res.render('about', {
        title: 'About Travlr'
    });
};

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        trips
    });
};

const rooms = (req, res) => {
    res.render('about', {
        title: 'Rooms'
    });
};

const meals = (req, res) => {
    res.render('about', {
        title: 'Meals'
    });
};

const news = (req, res) => {
    res.render('about', {
        title: 'News'
    });
};

const contact = (req, res) => {
    res.render('about', {
        title: 'Contact'
    });
};

module.exports = {
    homepage,
    about,
    travel,
    rooms,
    meals,
    news,
    contact
};