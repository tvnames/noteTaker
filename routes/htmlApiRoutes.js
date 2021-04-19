//  const db = require('./db/db.json');



const createhtmlApiroutes = (app) => {
  app.get("/api/notes", (req, res) =>
    db.readNotes().then((notes) => res.json(notes))
  );
};


module.exports = createhtmlApiroutes;