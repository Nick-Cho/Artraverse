import Post from '../models/post';
import User from '../models/user'
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})
export async function createPost(req,res) {
  
  const {content, image} = req.body;
  if(Object.keys(image).length === 0){
    return res.status(400).send({
      message: "Image is required"
    });
  }
  try{
    const post = new Post({content, image, postedBy: {_id: req.user._id}});
    //console.log(post.postedBy);
    post.save();
    res.json(post);
  } catch(err) {
    console.log(err);
    res.sendStatus(400);
  }
}

export async function uploadImage(req,res){
  //console.log("request files:", req.files);
  try{
    const result = await cloudinary.uploader.upload(req.files.image.path);
    //console.log("uploaded image url:", result);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    })
  } catch(err){
    console.log(err);
  }
};

export const postsByUser = async (req,res) => {
  try{
    const posts = await Post.find({postedBy: req.user._id})
    .populate('postedBy')
    .sort({createdAt: -1}) // filters by newest post
    .limit(9); //limits to 9 posts
    //console.log("posts after populated: ", posts);
    res.json(posts);
  } catch(err){
    console.log(err);
  }
}