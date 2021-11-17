// Node Server App
// index.js

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

//
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// Link to static/client files -css/js/img
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

// Routes for pages/views
app.get('/', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('about'));
app.get('/clients', (req, res) => res.render('clients'));
app.get('/work', (req, res) => res.render('work'));

//
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});