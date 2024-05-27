const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookiesParser = require('cookie-parser');
const bodyParser = require("body-parser");
const passport = require("passport");
const { route } = require("./route/route");
const router = require("./route/route");
const localStartegy = require("passport-local").Strategy;
require('dotenv').config()


//                              Built-in Module

const DB_URL = process.env.MONGODB_URL;
const Port = process.env.PORT || 8000
app.use(express.json());
app.use(cors());
app.use(cookiesParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())


app.use('/api', router)
//         Mongo Conectivity
mongoose.connect(DB_URL, {
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


app.listen(Port, () => {
  console.log("Server listening at port " + Port);
});
