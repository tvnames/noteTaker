
const express = require("express");
const path = require("path");
// const db = require('./db');
const createhtmlApiroutes = require('./routes/htmlApiRoutes')

const app = express();
const PORT = process.env.PORT || 3001


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));



// app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlApiRoutes"));
createhtmlApiroutes(app);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});