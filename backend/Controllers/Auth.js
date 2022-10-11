const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const keys = require("../config/key");
const userModel = require("../Scheme/Users");

var SALT_WORK_FACTOR = 10;

router.post("/signup", (req, res) => {
  console.log(req.body);
  userModel.findOne({ name: req.body.name }).then((data) => {
    if (data !== null) {
      return res.json({ message: "same_user" });
    } else {
      userModel.findOne({ email: req.body.email }).then((data) => {
        if (data !== null) {
          return res.json({ message: "same_email" });
        } else {
          let hashpass = "";
          bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err) {
              console.log(err);
              return;
            }
            bcrypt.hash(req.body.password, salt, function (err, hash) {
              if (err) {
                console.log(err);
                return;
              } else {
                hashpass = hash;
                const newUser = new userModel({
                  name: req.body.name,
                  email: req.body.email,
                  password: hashpass,
                  signup_date: new Date().toLocaleString("en-US", {
                    timeZone: "America/New_York",
                  }),
                  permission: req.body.permission,
                });
                newUser.save(function (err, added) {
                  if (err) console.log(err);
                  else {
                    res.json({
                      message: "message",
                    });
                  }
                });
              }
            });
          });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  userModel.findOne({ email: req.body.email }).then((data) => {
    if (!data) return res.json({ message: "no_user" });
    else {
      if (!data.permission) {
        return res.json({ message: "no_permission" });
      } else {
        bcrypt.compare(req.body.password, data.password).then((isMatch) => {
          if (isMatch) {
            const payload = {
              _id: data._id,
              user_id: data.user_id,
              email: data.email,
              username: data.username,
              password: req.body.password,
              signup_date: data.signup_date,
              last_signin_date: new Date().toLocaleString(),
            };
            jwt.sign(payload, keys.secretOrKey, (err, token) => {
              return res.json({
                message: "message",
                jwtToken: token,
              });
            });
          } else {
            return res.json({ message: "wrong_pass" });
          }
        });
      }
    }
  });
});

module.exports = router;
