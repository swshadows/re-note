import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: { type: String },
  body: { type: String },
  date: { type: Date, default: Date.now },
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;
