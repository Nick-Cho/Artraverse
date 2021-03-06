const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true, //Gets rid of whitespace in the beginning or end of the string
    required: true,
  },
  last_name: {
    type: String,
    trim: true, //Gets rid of whitespace in the beginning or end of the string
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true, //Gets rid of whitespace in the beginning or end of the string
    required: true,
    unique: true, //Ensures there's no copies of  
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 64,
  },
  secret: {
    type: String,
    required: true,
  },
  about:{type: String},
  image:{url: String, public_id: String},
  following: [{type: mongoose.Schema.Types.ObjectID, ref: "User"}],
  followers: [{type: mongoose.Schema.Types.ObjectID, ref: "User"}],
},
{timestamps: true}
);

export default mongoose.model("User", userSchema);