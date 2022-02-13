import express from "express"
import formidable from "express-formidable";

const router = express.Router();

//middleware
import {requireSignIn, canEditPost} from "../middlewares";
//Controllers 
import {
  createPost, 
  uploadImage, 
  postsByUser, 
  userPost, 
  updatePost, 
  deletePost,
  newsFeed,
  likePost,
  unlikePost,
  addComment,
  removeComment,
  totalPosts,
  posts,
  getPost
} from '../controllers/post.js'

router.post('/create-post',requireSignIn, createPost);
router.post('/upload-image',requireSignIn, formidable({maxFileSize: 5*1024*1024}), uploadImage);
//posts uploaded by the user
router.get('/user-posts', requireSignIn, postsByUser);
router.get('/user-post/:_id', requireSignIn, userPost)
router.put('/update-post/:_id', requireSignIn, canEditPost, updatePost)
router.delete('/delete-post/:_id', requireSignIn, canEditPost, deletePost)

router.get('/news-feed/:page', requireSignIn, newsFeed);

router.put('/liked-post', requireSignIn, likePost);
router.put('/unliked-post', requireSignIn, unlikePost)

router.put('/add-comment', requireSignIn, addComment);
router.put('/remove-comment', requireSignIn, removeComment);

router.get('/total-posts', totalPosts);

//route to get posts in the home page
router.get('/posts', posts);

router.get('/post/:_id', getPost)

module.exports = router;
