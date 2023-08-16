var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");


router.post("/create", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, false, (authorized) => {
        /*Check if the username is taken*/
        if (authorized) {
             db.run("INSERT INTO wage_types (title)VALUES ('" +
                 body.title +

                 "')",
                            (err) => {
                                if (err) {
                                    res.send(
                                        JSON.stringify({ error: `"account creation error: ${err}` })
                                    );
                                } else {
                                    res.send(JSON.stringify({ message: "account created" }));
                                }
                }
            );

        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });
});

/*The rest is pretty straightforward*/
router.post("/read", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            db.get(
                "SELECT * FROM wage_types",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", wage_types: row }));
                    } else {
                        res.send(JSON.stringify({ error: "No data found" }));
                    }
                }
            );
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });
});

router.post("/read-single", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            db.get(
                "SELECT * FROM wage_types WHERE type_id = " + body.type_id,
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", wage_type: row[0] }));
                    } else {
                        res.send(JSON.stringify({ error: "No data found" }));
                    }
                }
            );
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });
});

router.post("/delete", function (req, res, next) {
    console.log('delete')
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            db.get("SELECT EXISTS ( SELECT 1 FROM categories WHERE wage_type = " + body.type_id + ") AS id_used_in_fk",
            (row) => {
                if (row) {
                    if(row[0].id_used_in_fk == 0){ 
                        db.run(
                            "DELETE FROM wage_types WHERE type_id = " + body.type_id + "",
                            (err) => {
                                if (err) {
                                    res.send(JSON.stringify({ error: `delete error: ${err}` }));
                                } else {
                                    res.send(JSON.stringify({ message: "delete success" }));
                                }
                            }
                        );
                    } else {
                        res.send(JSON.stringify({ error: "Cannot delete record used in constraint" }));
                    }
                }
            })
            
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });

});

router.post("/update", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
     
            db.run(
                "UPDATE wage_types SET title =" +
                "'" + body.title +
                "' WHERE type_id = " + body.type_id+
                "",
                (err) => {
                    if (err) {
                        res.send(JSON.stringify({ error: `update error: ${err}` }));
                    } else {
                        res.send(JSON.stringify({ message: "update success" }));
                    }
                }
            );
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });
});



module.exports = router