import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: "./.env",
});

const app = express();

const Port = process.env.PORT || 3000;

app.use(express.json());

const dburl = process.env.MONGO_URI!;

const main = async () => {
  await mongoose.connect(dburl);
};

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(Port, () => {
  console.log("Server is running on port 3000");
});
