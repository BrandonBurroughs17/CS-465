const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const hbs = require('express-handlebars');

const indexRouter = require('./routes/index');

const app = express();

app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'app_server/views/layouts'),
        partialsDir: path.join(__dirname, 'app_server/views/partials')
    })
);

app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;