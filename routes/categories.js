var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");


router.post("/create", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, false, (authorized) => {
        /*Check if the username is taken*/
        if (authorized) {
             db.run("INSERT INTO categories (title, description, icon, account, wage_type, deductible, admin_only, tax)VALUES ('" +
                 body.title +
                 "','" +
                 body.description +
                 "','" +
                 body.icon +
                 "','" +
                 body.account +
                 "','" +
                 body.wage_type +
                 "','" +
                 body.deductible +
                 "','" +
                 body.admin_only +
                 "','" +
                 body.tax +
                 "')",
                            (err) => {
                                if (err) {
                                    res.send(
                                        JSON.stringify({ error: `"receipt creation error: ${err}` })
                                    );
                                } else {
                                    res.send(JSON.stringify({ message: "receipt created" }));
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
                "SELECT * FROM categories",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", categories: row }));
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
                "SELECT * FROM categories WHERE category_id = " + body.category_id,
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", category: row[0] }));
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
        
                db.get("SELECT EXISTS ( SELECT 1 FROM receipts WHERE category = " + body.category_id+ ") AS id_used_in_fk",
                (row) => {
                    if (row) {
                        if(row[0].id_used_in_fk == 0){
                            db.run(
                                "DELETE FROM categories WHERE category_id = '" + body.category_id + "'",
                                (err) => {
                                    if (err) {
                                        res.send(JSON.stringify({ error: `delete error: ${err}` }));
                                    } else {
                                        res.send(JSON.stringify({ message: "delete success" }));
                                    }
                                }
                            );
                        }
                        else{
                            res.send(JSON.stringify({ error: "Cannot delete record used in constraint" }));
                        }
                    }})
 
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
                "UPDATE categories SET title =" +
                "'" + body.title +
                "', description = '" + body.description +
                "',icon = '" + body.icon +
                "',account = " + body.account +
                ", wage_type = " + body.wage_type +
                ", deductible = " + body.deductible +
                ", admin_only = " + body.admin_only +
                ", tax = " + body.tax +
                " WHERE category_id = " +
                body.category_id +
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



module.exports = router;
 