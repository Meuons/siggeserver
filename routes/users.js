var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");

router.post("/login", function (req, res, next) {
  const body = req.body;
  let token = (Math.random() + 1).toString(36).substring(2);
  /*Get the user from the db with the provided username*/

  db.each(
    "SELECT username, password FROM users WHERE username = '" +
      body.username +
      "'",
    (row) => {
      /*Check if the username exists in the db*/
      if (row) {
        /*Check if the username and password match*/
        if (row.username === body.username && row.password === body.password) {
          /*Add a token in the users row and return the token to the client*/
          db.run(
            "UPDATE users SET token ='" +
              token +
              "', logged_in = 1 WHERE username = '" +
              row.username +
              "'",
            /*Error handling using the callback*/
            (err) => {
              if (err) {
                res.send(JSON.stringify({ message: `login error:${err}` }));
              } else {
                res.send(
                  JSON.stringify({ message: "login success", token: token })
                );
              }
            }
          );
        } else {
          res.send(JSON.stringify({ message: "invalid credentials" }));
        }
      } else {
        res.send(JSON.stringify({ message: "user not found" }));
      }
    }
  );
});
router.post("/logout", function (req, res, next) {
  const body = req.body;
  let token = (Math.random() + 1).toString(36).substring(2);
  /*Authorize the user*/
  auth.authorize(body.token, body.username, false, (authorized) => {
    if (authorized) {
      /*Set logout status to false and replace the old token.
        The token gets replaced instead of removed because the column
        has a unique constraint meaning several tokens can't be empty in the db
        */
      db.run(
        "UPDATE users SET token ='" +
          token +
          "', logged_in = 0 WHERE username = '" +
          body.username +
          "'",
        (err) => {
          if (err) {
            res.send(JSON.stringify({ message: `logout error: ${err}` }));
          } else {
            res.send(JSON.stringify({ message: "logout success" }));
          }
        }
      );
    } else {
      res.send(JSON.stringify({ message: "unauthorized" }));
    }
  });
});

router.post("/create", function (req, res, next) {
  const body = req.body;
  auth.authorize(body.token, body.username, true, (authorized) => {
    /*Check if the username is taken*/
    if (authorized) {
      db.each(
        "SELECT username FROM users WHERE username = '" +
          body.newUsername +
          "'",
        (row) => {
          if (row) {
            res.send(JSON.stringify({ message: "username already taken" }));
          } else {
            db.run(
              "INSERT INTO users (username, password)VALUES ('" +
                body.newUsername +
                "','" +
                body.newPassword +
                "')",
              (err) => {
                if (err) {
                  res.send(
                    JSON.stringify({ message: `"user creation error: ${err}` })
                  );
                } else {
                  res.send(JSON.stringify({ message: "user created" }));
                }
              }
            );
          }
        }
      );
    } else {
      res.send(JSON.stringify({ message: "unauthorized" }));
    }
  });
});

/*The rest is pretty straightforward*/

router.post("/delete", function (req, res, next) {
  const body = req.body;
  auth.authorize(body.token, body.username, true, (authorized) => {
    if (authorized) {
      db.run(
        "DELETE FROM users WHERE username = '" + body.updateUser + "'",
        (err) => {
          if (err) {
            res.send(JSON.stringify({ message: `delete error: ${err}` }));
          } else {
            res.send(JSON.stringify({ message: "delete success" }));
          }
        }
      );
    } else {
      res.send(JSON.stringify({ message: "unauthorized" }));
    }
  });
});

router.post("/update", function (req, res, next) {
  const body = req.body;
  auth.authorize(body.token, body.username, true, (authorized) => {
    if (authorized) {
      db.run(
        "UPDATE users SET password = '" +
          body.newPassword +
          "' WHERE username = '" +
          body.updateUser +
          "'",
        (err) => {
          if (err) {
            res.send(JSON.stringify({ message: `update error: ${err}` }));
          } else {
            res.send(JSON.stringify({ message: "update success" }));
          }
        }
      );
    } else {
      res.send(JSON.stringify({ message: "unauthorized" }));
    }
  });
});
module.exports = router;
