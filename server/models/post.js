const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema;

const postSchema = new mongoose.Schema({
  content: {
    type : {},
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  image: {
    url: String,
    public_id: String, //id of the image we can use to delete the post later
  },
  likes: [{
    type: ObjectId,
    ref:"User"
  }],
  comments:[{
    text: String,
    created: {type: Date, default: Date.now},
    postedBy: {
    type: ObjectId,
    ref: "User",
    },
  }]
}, {timestamps: true});

export default mongoose.model('Post', postSchema);