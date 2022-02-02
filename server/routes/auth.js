import express from "express"

const router = express.Router();

//middleware
import {requireSignIn} from "../middlewares";
//Controllers 
import {register, login, currentUser, forgotPassword, profileUpdate} from '../controllers/auth'

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', requireSignIn, currentUser, ); 
router.post('/forgot-password', forgotPassword);
router.put('/profile-update', requireSignIn, profileUpdate)

module.exports = router;