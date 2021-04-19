const express = require('express');

const path = require("path");
const db = require("./Public/db/db.json");
const createhtmlApiroutes = ("./routes/htmlApiRoutes");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public/notes.html")));

app.use(require("./routes/ApiRoutes"));
app.use(require("./routes/htmlApiRoutes").default);
createhtmlApiroutes(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
