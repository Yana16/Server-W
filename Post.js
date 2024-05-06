import mongoose from "mongoose";

const Post = new mongoose.Schema({
  userRating: { type: Number, required: true },
  // postId: { type: Number, required: true },
});

export default mongoose.model("Post", Post);
