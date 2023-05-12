import express from "express";
const app = express();
const port = 5000;

import mongoose from "mongoose";
async function bootStart() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Database Connection Successfully");
    app.listen(port, () => {
      console.log(`Server is running  on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootStart();
