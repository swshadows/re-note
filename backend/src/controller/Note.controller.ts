import Note from "../models/Note.model";
import isEmpty from "../utils/checkEmpty";
import mongoose from "mongoose";
import { Request, Response } from "express";

export default {
  async getAll(req: Request, res: Response) {
    const notes = await Note.find({});
    res.status(200).send({ notes });
  },

  async get(req: Request, res: Response) {
    const { id } = req.params;
    if (isEmpty(id)) return res.status(400).send({ error: "Missing ID" });
    if (!mongoose.isValidObjectId(id)) return res.status(400).send({ error: "Invalid object ID" });
    const note = await Note.findById(id);
    if (!note) return res.status(400).send({ error: "Note not found" });
    const { title, body, date } = note;
    res.send({ title, body, date });
  },

  async add(req: Request, res: Response) {
    const { title, body } = req.body;
    if (isEmpty(title, body)) return res.status(400).send({ error: "Missing arguments" });
    await Note.create({ title, body });
    res.status(200).send({ message: "Success, note added" });
  },

  async edit(req: Request, res: Response) {
    const { title, body } = req.body;
    if (isEmpty(title, body)) return res.status(400).send({ error: "Missing arguments" });
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).send({ error: "Invalid object ID" });
    const note = await Note.findByIdAndUpdate(id, { title, body });
    if (!note) return res.status(400).send({ error: "Invalid note" });
    res.status(200).send({ message: "Success, note updated" });
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    if (isEmpty(id)) return res.status(400).send({ error: "Missing ID" });
    if (!mongoose.isValidObjectId(id)) return res.status(400).send({ error: "Invalid object ID" });
    const note = await Note.findById(id);
    if (!note) return res.status(400).send({ error: "Note not found" });
    await Note.deleteOne({ _id: id });
    res.status(200).send({ message: "Success, note deleted" });
  },
};
