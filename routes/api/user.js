const router = require('express').Router();
// const db = require('../../models');

 
  router.post("/", (req, res) => {
    res.send("hello");
  })

  router.post("/signup", (req, res) => {
    console.log(
      "this is req.body name and email: " + req.body.username + " " + req.body.password
    )
    res.send(req.body);
  });

  module.exports = router;

  