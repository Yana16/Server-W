import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 3000;
const DB_URL =
  "mongodb+srv://yanavozniuk1602:1602@cluster0.3uwlbhr.mongodb.net/";
const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT ` + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
