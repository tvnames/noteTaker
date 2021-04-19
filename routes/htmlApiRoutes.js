 import { readNotes } from './Public/db/db.json';



const createhtmlApiroutes = (app) => {
  app.get("/api/notes", (req, res) =>
    readNotes().then((notes) => res.json(notes))
  );
};


export default createhtmlApiroutes;