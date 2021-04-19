const express = require('express');

const path = require("path");
const db = require("./db/db.json");
const createhtmlApiRoutes = require("./routes/htmlApiRoutes");
const createApiRoutes = require("./routes/ApiRoutes")
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public/notes.html")));

createhtmlApiRoutes(app);
createhtmlApiRoutes(app);




app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
