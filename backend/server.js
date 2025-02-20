import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL;

app.get("/ping", (req, res) => {
  res.json({
    message: "Pong",
    status: "success",
  });
});

let flag = false;

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {  //mongoose connection established
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB!"); //conditions for the connections.
    flag = true;
  } catch (error) {
    console.error(`Error connecting to DB: ${error.message}`);
    process.exit(1);
  }
};
connectDB();

app.get("/", (req, res) => { //to check if the server is working or not
  res.json({
    message: "Hello Welcome to ASAP Project!",
    DB_status: flag,
  });
});

app.listen(PORT, () => {
  console.log(`Server running of PORT: ${PORT}`);
});
