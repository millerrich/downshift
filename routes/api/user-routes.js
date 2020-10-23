// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { v4: uuidv4 } = require("uuid");
module.exports = function(app) {

  app.get("/api/users", (req, res) => {
    db.User.findAll({
      include: db.Event
    }).then(dbUser => {
      return res.json(dbUser);
    });
  });

  app.post(
    "/api/login",
    passport.authenticate("local-user", {
      successRedirect: "/members",
      failureRedirect: "/"
    }),
    (req, res) => {

      return res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  );


  app.post("/api/signup", (req, res) => {
    console.log(
      "this is req.body name and email: " + req.body.name + " " + req.body.email
    );
    db.User.create({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        return res.redirect(307, "/api/login");
      })
      .catch(err => {
        return res.status(401).json(err);
      });
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      return res.json({});
    }
    return res.json({
      email: req.user.email,
      id: req.user.id,
      name: req.user.name
    });
  });

  app.post("/api/userbreaks/:id", (req, res) => {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      console.log(result);
      result.setUsers(req.user.id);
      return res.send(result);
    });
  });

  app.get("/api/userbreaks/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.user.id
      },
    }).then(dbUser => {
      return res.json(dbUser);
    });
  });


  app.get("/logout", (req, res) => {
    req.logout();
    return res.redirect("/");
  });

}
