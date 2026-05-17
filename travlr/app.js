const express = require('express');
const path = require('path');
const hbs = require('hbs');

const indexRouter = require('./app_server/routes/index');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});