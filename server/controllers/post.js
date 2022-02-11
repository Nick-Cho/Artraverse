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
    res.status(200).json(post);
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
    // const posts = await Post.find({postedBy: req.user._id})
    const posts = await Post.find()
    .populate('postedBy')
    .sort({createdAt: -1}) // filters by newest post
    .limit(9); //limits to 9 posts
    //console.log("posts after populated: ", posts);
    res.json(posts);
  } catch(err){
    console.log(err);
  }
}

export const userPost = async (req,res) => {
  try{
    const post = await Post.findById(req.params._id)
    .populate("postedBy")
    .populate('comments.postedBy');
    res.status(200).send(post);
  } catch (error) {
    console.log(err);
  }
}

export const updatePost = async (req,res) =>{
  // console.log("post update controller", req.body);
  try{
    const post = await Post.findByIdAndUpdate(req.params._id, req.body, {
      new: true, //returns updated response
    })
    res.status(200).send(post);
  }catch(err){
    console.log(err);
  }
}

export const deletePost = async (req,res) =>{
  try{
    const post = await Post.findByIdAndDelete(req.params._id,);
    //removing image from cloudinary database
    const image = await cloudinary.uploader.destroy(post.image.public_id);
    res.status(200).send({ok: true});
  }catch (err){
    console.log(err);
  }
}

export const newsFeed = async (req,res) =>{
  try{
    const user = await User.findById(req.user._id);
    let following = user.following;
    following.push(req.user._id);

    const posts = await Post.find({postedBy: {$in: following}})
    .populate("postedBy")
    .populate('comments.postedBy')
    .sort({createdAt: -1})
    .limit(9);
    res.status(200).send(posts);
  } catch(err){
    console.log()
  }
}

export const likePost = async (req,res) => {
  try{
    const post = await Post.findByIdAndUpdate(req.body._id, {
      $addToSet: {likes: req.user._id},
    },
    {new: true}
    );
    res.json(post);
  } catch(err){
    console.log(err);
  }
}

export const unlikePost = async (req,res) =>{
  try{
    const post = await Post.findByIdAndUpdate(req.body._id, {
      $pull: {likes: req.user._id},
    },
    {new: true}
    );
    res.json(post);
  } catch (err) {
    console.log(err);
  }
}

export const addComment = async(req,res) => {
  try{
    const {postId, comment} = req.body;
    const post = await Post.findByIdAndUpdate(postId,{
      $push: {comments: {text: comment, postedBy: req.user._id}},
      },
      {new: true}
    )
    .populate('postedBy')
    .populate('comments.postedBy');
    res.json(post);

  } catch(err) {
    console.log(err);
  }
}

export const removeComment = async(req,res) => {
  try{
    const {postId, comment} = req.body;
    const post = await Post.findByIdAndUpdate(postId,{
      $pull: {comments: {_id: comment._id}},
      },
      {new: true}
    )
    res.json(post);

  } catch(err) {
    console.log(err);
  }
}

export const totalPosts = async (req, res) => {
  try{
    const total = await Post.count();
    res.json(total);
  }
  catch (err){
    console.log(err);
  }
}