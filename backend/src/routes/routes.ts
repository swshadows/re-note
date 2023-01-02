import { Router } from "express";
import NoteController from "../controller/Note.controller";
const routes = Router();

routes.get("/", NoteController.getAll);
routes.post("/add", NoteController.add);
routes.put("/edit/:id", NoteController.edit);
routes.get("/:id", NoteController.get);
routes.delete("/:id", NoteController.delete);

export default routes;
