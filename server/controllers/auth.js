import User from '../models/user'
import {hashPassword, comparePassword} from "../helpers/auth"
export const register = (req,res)=>{
  //console.log('Register Endpoint =>', req.body)
  const {fname, lname, email, pswd, secret} = req.body;

  //validating that name and password fields have valid values
  if (!fname || !lname) return res.status(400).send('First name and last name are required');
  if (!pswd || pswd.length < 6)
   return res
   .status(400)
   .send('Must enter a password that has 6 or more characters');
  if (!secret) return res.status(400).send("This field is required");

  //Checking if user with the email entered already exists
  const exist = User.findOne({"email": email});
  // if (exist !== null){ 
  // return res.status(400).send("Email is already registered!");
  // }

  //hashing password
  const hashedPswd = hashPassword(pswd);

  const user = new User({
    first_name: fname,
    last_name: lname,
    email: email,
    password: pswd,
    secret: secret,
  });
  try{
    user.save();
    console.log('Registered User:', user);
    return res.json({
      ok: true,
    })
  } catch (err) {
    console.log('Register Error:', err);
    return res.status(400).send('Error in creating new user')
  }
};

export const login = async (req,res) => {

}