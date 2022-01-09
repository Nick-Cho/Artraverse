const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database Connected!"))
.catch(err => console.log('DB Connection Error', err))

app.use(cors());

app.listen(8000, () => console.log("Server running on port 8000"))