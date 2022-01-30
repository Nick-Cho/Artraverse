import express from "express"
import formidable from "express-formidable";

const router = express.Router();

//middleware
import {requireSignIn} from "../middlewares";
//Controllers 
import {createPost, uploadImage, postsByUser} from '../controllers/post.js'

router.post('/create-post',requireSignIn, createPost);
router.post('/upload-image',requireSignIn, formidable({maxFileSize: 5*1024*1024}), uploadImage);
//posts uploaded by the user
router.get('/user-posts', requireSignIn, postsByUser);

module.exports = router;
