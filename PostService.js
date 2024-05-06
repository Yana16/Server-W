import Post from "./Post.js";
import post_ratings from "./AverageRating.js";

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getAver() {
    const post = await post_ratings.find();
    return post;
  }
  async getRate() {
    const post = await post_ratings.find();
    return post;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("ID not found");
    }
    const post = await Post.findById(id);
    return post;
  }
  async update(post) {
    if (!post._id) {
      throw new Error("ID not found");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id) {
    if (!id) {
      throw new Error("ID ot found");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
