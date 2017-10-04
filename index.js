const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const controllers = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static('client'));

controllers.set(app);

app.listen(config.port, () => console.log('App listening on port '+ config.port));
