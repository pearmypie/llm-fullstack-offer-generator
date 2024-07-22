require('dotenv').config();
const port = process.env.APP_PORT || 3000;

const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});