import express from "express"

const router = express.Router();

//middleware
import {requireSignIn} from "../middlewares";
//Controllers 
import {register, login, currentUser} from '../controllers/auth'

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', requireSignIn, currentUser); 

module.exports = router;