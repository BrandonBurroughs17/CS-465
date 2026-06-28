const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('users');

const login = async (req, res) => {

    const { email, password } = req.body;

    if (email === 'admin@test.com' &&
        password === 'password123') {

        const token = jwt.sign(
            {
                email
            },
            'MY_SECRET_KEY',
            {
                expiresIn: '1h'
            }
        );

        return res.status(200).json({
            token
        });
    }

    res.status(401).json({
        message: 'Invalid credentials'
    });
};

module.exports = {
    login
};