import { Router } from "express";
import NoteController from "../controller/Note.controller";
const routes = Router();

routes.post("/add", NoteController.Add);
routes.put("/edit/:id", NoteController.Edit);
routes.get("/:id", NoteController.Get);

export default routes;
