const router = require('express').Router();
const controller = require('../../controllers/userController');
 
  // router.post("/", (req, res) => {
  //   res.send("hello");
  // })

  router.route("/signup")
    .get(controller.findAll)
    .post(controller.create)

  module.exports = router;

  