import expressJwt from 'express-jwt';
import Post from '../models/post'

export const requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256']
});

export const canEditPost = async (req,res, next) =>{
  //next is a callback function
  try{
    const post = await Post.findById(req.params._id);
    //console.log("post received from canEditPost middleware: ", post);
    if (req.user._id != post.postedBy){
      return res.status(400).send("Unauthorized");
    }
    else{
      next();
    }
  } catch(err){
    console.log(err);
  }
}