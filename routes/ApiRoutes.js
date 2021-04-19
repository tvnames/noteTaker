const db = require('./Public/db/db.json');


const createApiRoutes = (app) => {
  app.get("/api/notes", (req,res) =>
  db.readNotes().then((notes) => res.json(notes))
  )
};

module.exports = (app) => {

  app.get('/api/tables', (req, res) => res.json(notes));
};