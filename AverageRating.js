import mongoose from "mongoose";

const post_ratings = new mongoose.Schema({
  avgAmount: { type: Number },
});

export default mongoose.model("post_ratings", post_ratings);
