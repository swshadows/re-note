import express, { urlencoded } from "express";
import dotenv from "dotenv";
import routes from "./routes/routes";
import mongoose from "mongoose";
dotenv.config();

const server = express();
server.use(urlencoded({ extended: false }));
server.use(express.json());
server.use(routes);

const dbConnection = "mongodb://mongo/my-notes";

const port = process.env.SERVER_PORT || 3001;

server.listen(port, async () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  try {
    await mongoose.connect(dbConnection);
    console.log(`💾 Connected to MongoDB on ${dbConnection}`);
  } catch (e) {
    console.log("Error connecting to database");
  }
});
