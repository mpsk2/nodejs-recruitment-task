const express = require('express');
const path = require('path');
const logger = require('morgan');
const commentsRoute = require('./routes/comments');
const moviesRoute = require('./routes/movies');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/comments', commentsRoute);
app.use('/movies', moviesRoute);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

