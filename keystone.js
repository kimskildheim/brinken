// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var express  = require('express');
var app      = express();
var session  = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var flash    = require('connect-flash');

/* Connect to the database */
var configDB = require('./config/database.js');
var db = mongoose.connection;
//mongoose.connect(configDB.url);

//app.use(morgan('dev')); // log every request to the console
var sessionConfig = require('./config/sessionConfig.js');
app.use(cookieParser(sessionConfig.cookieKey)); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(session({
	secret: sessionConfig.sessionKey,
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/* Include the routes */
require('./app/routes.js')(app, passport, db);

///app.get('*', functio/**/n(req, res){
///	res.sendFile(__dirname + '/public/index.html');
///});

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({

	'name': 'Brinken',
	'brand': 'Brinken',

	'app': app,
	'mongoose': mongoose,
	'static': ['public', 'bower_components'],
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

});

// Load your project's Models
keystone.import('app/models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes
//keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
