import express from "express"

const router = express.Router();

//middleware
import {requireSignIn} from "../middlewares";
//Controllers 
import {createPost, uploadImage} from '../controllers/post.js'

router.post('/create-post',requireSignIn, createPost);
router.post('upload-image', requireSignIn, uploadImage);

module.exports = router;