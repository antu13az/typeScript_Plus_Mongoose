import mongoose from "mongoose";
import app from "./app";
const port: number = 5000;

async function bootStart() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testMongoose");
    console.log("Database Connection Successfully");
    app.listen(port, () => {
      console.log(`Server is running  on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootStart();
