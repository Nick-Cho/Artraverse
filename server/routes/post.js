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
  getPost,
  profileFeed,
  userTotalPosts
} from '../controllers/post.js'

router.post('/create-post',requireSignIn, createPost);

//function to attach image to post
router.post('/upload-image',requireSignIn, formidable({maxFileSize: 5*1024*1024}), uploadImage);

//posts uploaded by the user
router.get('/user-posts', requireSignIn, postsByUser);
router.get('/user-post/:_id', requireSignIn, userPost); //updates comments and likes to update postin webpage
router.put('/update-post/:_id', requireSignIn, canEditPost, updatePost)
router.delete('/delete-post/:_id', requireSignIn, canEditPost, deletePost)

router.get('/news-feed/:page', requireSignIn, newsFeed);
router.get('/profile-feed/:page/:_id', requireSignIn, profileFeed); //gets updated posts by one user

router.put('/liked-post', requireSignIn, likePost);
router.put('/unliked-post', requireSignIn, unlikePost)

router.put('/add-comment', requireSignIn, addComment);
router.put('/remove-comment', requireSignIn, removeComment);

router.get('/total-posts', totalPosts); //gets total number of posts
router.get('/user-total-posts/:_id', userTotalPosts);
//route to get all available posts in the home page
router.get('/posts', posts);

router.get('/post/:_id', getPost)

module.exports = router;
