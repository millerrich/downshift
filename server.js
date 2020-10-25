const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const session = require("express-session"); //*
const passport = require('./passport'); //*
const passportLocal = require('passport-local').Strategy; 
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(  //*
  session({
    secret: 'downshift',
    resave: true,
    saveUninitialized: true
  })
);

app.use(cookieParser("downshift"))
app.post('/login', (req,res) => {
  console.log(req.body); 
});
app.post('/register', (req,res) => {
  console.log(req.body); 
});
app.post('/user', (req,res) => {
});


app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/downshift", {useNewUrlParser: true});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
