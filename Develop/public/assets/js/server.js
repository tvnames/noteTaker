const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;














app.use(
    express.static(path.join(__dirname, './public'), { extensions:v['.html']})
);

app.listen(PORT, () => console.log('App listening on PORT ${PORT}'));