import express from "express"

const router = express.Router();

//middleware
import {requireSignIn} from "../middlewares";
//Controllers 
import {currentUser} from '../controllers/auth'
import {createPost} from '../controllers/post.js'

router.post('/create-post',requireSignIn, createPost);

module.exports = router;