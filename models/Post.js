import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  commentId: { type: mongoose.Schema.Types.ObjectId, required: true },
  userId: { type: String, required: true },
  content: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String },
    likes: { type: [String], default: [] },
    comments: { type: [CommentSchema], default: [] }, // New field for comments
    imageUrl: { type: String },
    videoUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
