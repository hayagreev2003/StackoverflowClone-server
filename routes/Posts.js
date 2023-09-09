import express from "express";
import {
  addPost,
  getPosts,
  getUserPosts,
  likePost,
  dislikePost,
  addComment,
  deleteComment,
} from "../controllers/Post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/get", getPosts);
router.get("/user-posts/:id", getUserPosts);
router.post("/add", auth, addPost);
router.patch("/like/:id", auth, likePost);
router.patch("/dislike/:id", auth, dislikePost);

// New routes for adding and deleting comments
router.patch("/add-comment/:id", auth, addComment);
router.delete('/delete-comment/:id', auth, deleteComment);

export default router;
