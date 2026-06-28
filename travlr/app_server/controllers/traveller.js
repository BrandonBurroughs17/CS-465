const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

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

const travel = async (req, res) => {
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            if (!Array.isArray(json)) {
                res.render('travel', {
                    title: 'Travlr Getaways',
                    trips: []
                });
                return;
            }

            res.render('travel', {
                title: 'Travlr Getaways',
                trips: json
            });
        })
        .catch(err => {
            res.status(500).send(err.message);
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