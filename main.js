require('dotenv').config();
const port = process.env.APP_PORT || 3000;

const express = require('express');
const morgan = require('morgan');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use(morgan('common'));

app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});