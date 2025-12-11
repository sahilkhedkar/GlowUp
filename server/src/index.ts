import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

const app = express();

const Port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(Port, () => {
  console.log("Server is running on port 3000");
});