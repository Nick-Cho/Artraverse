const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const {readdirSync} = require("fs")


const morgan = require("morgan");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database Connected!"))
.catch(err => console.log('DB Connection Error', err))

//Middlewares 

app.use(express.json({limit: '5mb'})); //Makes sure that the data coming from the client to the server is using JSON format - if not in JSON format will receive undefined
app.use(express.urlencoded({extended: true}));

//Enables API to be used by client side url
app.use(cors({
  origin: ['http://localhost:3000']
})); 

//Loading Routes by using readdirSync to go through every file in the routes folder
readdirSync('./routes').map((r)=>{ 
  app.use('/api', require(`./routes/${r}`))
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));