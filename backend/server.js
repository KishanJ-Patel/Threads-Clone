import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

// Middleware to parse response in json
app.use(express.json());

// Cross-origin resource sharing policy
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend server domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type"],
  })
);

// HTTP routes
app.get("/", (request, response) => {
  return response.status(200).send("Backend is working.");
});

// Connect to database, if successful then start listening to PORT
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Backend server connected to database.");
    app.listen(PORT, () =>
      console.log(`Backend server listening to PORT: ${PORT}`)
    );
  })
  .catch((error) => console.log(error));
