import express from "express"

const router = express.Router();

//middleware
import {requireSignIn} from "../middlewares";
//Controllers 
import {
  register, 
  login, 
  currentUser, 
  forgotPassword, 
  profileUpdate, 
  findPeople, 
  userFollow, 
  addFollower,
  userFollowing,
  removeFollower,
  userUnfollow,
  searchUser
} from '../controllers/auth'

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', requireSignIn, currentUser, ); 
router.post('/forgot-password', forgotPassword);

router.put('/profile-update', requireSignIn, profileUpdate);
router.get('/find-people', requireSignIn, findPeople);

router.put('/user-follow', requireSignIn, addFollower, userFollow);
router.get('/user-following', requireSignIn, userFollowing)
router.put('/user-unfollow',requireSignIn, removeFollower, userUnfollow)

router.get("/search-user/:query", searchUser);

module.exports = router;