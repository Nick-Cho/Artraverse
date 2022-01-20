import User from '../models/user'
import {hashPassword, comparePassword} from "../helpers/auth"
import jwt from "jsonwebtoken"

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
  });
  try{
    user.save();
    //console.log('Registered User:', user);
    return res.json({
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