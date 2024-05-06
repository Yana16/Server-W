import mongoose from "mongoose";

const Post = new mongoose.Schema({
  userRating: { type: Number, required: true },
  id: { type: String, required: true },
});

export default mongoose.model("Post", Post);
