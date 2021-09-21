const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'assets')));
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)



// app.get('/', (req, res) => res.send('Hello Wurld!'));

app.get('/', (req, res) => res.render('index',{name:"App Matt"}));




















app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});