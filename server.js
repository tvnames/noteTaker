
const express = require("express");
const path = require("path");
const db = require('./develop/db');
const createhtmlApiroutes = require('./routes/htmlApiRoutes')

const app = express();
const PORT = process.env.PORT || 30010


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlApiRoutes"));


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});