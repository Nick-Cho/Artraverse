import Post from '../models/post';

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

export async function uploadImage(){
  
}