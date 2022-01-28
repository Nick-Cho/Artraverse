import Post from '../models/post';
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})
export async function createPost(req,res) {
  // console.log('post received in controller: ', req.body)
  const {content} = req.body;
  if(!content.length){
    return res.status(400).send({
      message: "Content is required"
    });
  }
  try{
    const post = new Post({content, postedBy: req.user._id});
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
    console.log("uploaded image url:", result);
    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    })
  } catch(err){
    console.log(err);
  }
}