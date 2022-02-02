import User from '../models/user'
import {hashPassword, comparePassword} from "../helpers/auth"
import jwt from "jsonwebtoken"
import {nanoid} from "nanoid"

export async function register (req,res) {
  //console.log('Register Endpoint =>', req.body)
  const {fname, lname, email, pswd, secret} = req.body;

  //validating that name and password fields have valid values
  if (!fname || !lname) return res.status(400).send('First name and last name are required');
  if (!pswd || pswd.length < 6)
   return res
   .status(400)
   .send({message:'Must enter a password that has 6 or more characters'});
  if (!secret) return res.status(400).send({message:"This field is required"});

  //Checking if user with the email entered already exists
  const exist = await User.findOne({"email": email});
  if (exist) return res.status(400).send({message: "Email already registered!"});
  
  //hashing password
  const hashedPswd = await hashPassword(pswd);
  //console.log("Hashed password is: ", hashedPswd);
  const user = new User({
    first_name: fname,
    last_name: lname,
    email: email,
    password: hashedPswd,
    secret: secret,
    username: nanoid(10),
  });
  try{
    user.save();
    //console.log('Registered User:', user);
    return res.status(200).json({
      ok: true,
    })
  } catch (err) {
    console.log('Register Error:', err);
    return res.status(400).send({message:'Error in creating new user'})
  }
};

export async function login (req,res) {
  // console.log(req.body)
  try{
    const {email,pswd} = req.body;
    
    //checking if user exists
    const user = await User.findOne({"email": email});
    if (!user) return res.status(400).send({message: "User not found!"});

    //check password
    const match = await comparePassword(pswd, user.password);
    //console.log(match);
    if (!match) return res.status(400).send({message: "Incorrect Password!"});

    //Create JWT token if user is authenticated
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
      expiresIn: "7d", 
    });

    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    })
  } catch(err){
    console.log(err);
    return res.status(400).send({message:"Error in login request"});
  }
}

export async function currentUser(req,res) {
  try{
    const user = await User.findById(req.user._id);
    if (user){
      res.json({ok: true});
    }
    
  } catch (err){
    console.log(err);
    res.sendStatus(400);
  }

}

export const forgotPassword = async (req,res) =>{
  const {email, newPswd, secret} = req.body;
  //validation
  
  if (!newPswd || newPswd.length < 6){
    return res.status(400).json({
      message: 'New password is required and should be at least 6 characters long'
    })
  }
  if (!secret){
    return res.status(400).json({
      message: "Secret is required",
    })
  }
  const user = await User.findOne({email, secret});
  if (!user) {
    return res.status(400).json({
      message: "Your credentials do not match an account"
    });
  }

  try{
    const hashed = await hashPassword(newPswd)
    await User.findByIdAndUpdate(user._id, {password: hashed});
    return res.status(200).json({
      message: "Password updated",
    })
  } catch (err){
    console.log(err);
    return res.status(400).json({
      message: "Something went wrong, Try again"
    })
  }
}

export const profileUpdate = async (req,res) => {
  try{
    console.log("profile update request body: ", req.body);
    //data validation for if the fields are filled in
    const data = {};
    if (req.body.username){
      data.username = req.body.username;
    }
    if (req.body.fname){
      data.first_name = req.body.fname;
    }
    if (req.body.lname){
      data.last_name = req.body.lname;
    }
    if (req.body.pswd){
      if (req.body.pswd.length < 6){
        return res.status(400).send({
          error: "Password needs to be at least 6 characters long"
        });
      }
      else{
        data.password = await hashPassword(req.body.pswd);    
      }
    }
    if (req.body.secret){
      data.secret = req.body.secret;
    }
    let user = await User.findByIdAndUpdate(req.user._id, data, {new: true});
    //console.log()
    user.password = undefined;
    user.secret = undefined;
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    if (err.code == 11000){
      return res.status(400).send({error: "Username taken"})
    }
  }
}