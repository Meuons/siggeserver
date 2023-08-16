var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");


router.post("/create", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, false, (authorized) => {
        /*Check if the username is taken*/
        if (authorized) {
             db.run("INSERT INTO accounts (title)VALUES ('" +
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
                "SELECT * FROM accounts",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", accounts: row }));
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
                "SELECT * FROM accounts WHERE account_id = " + body.account_id,
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", account: row[0] }));
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
           
            db.get("SELECT EXISTS ( SELECT 1 FROM categories WHERE account = " + body.account_id + ") AS id_used_in_fk",
            (row) => {
                if (row) {
                    if(row[0].id_used_in_fk == 0){

                    db.get("SELECT EXISTS ( SELECT 1 FROM receipts WHERE account = " + body.account_id + ") AS id_used_in_fk",
                    (row) => {
                        if(row){
                            if(row[0].id_used_in_fk == 0){
                                db.run(
                                    "DELETE FROM accounts WHERE account_id = '" + body.account_id + "'",
                                    (err) => {
                                        if (err) {
                                            res.send(JSON.stringify({ error: `delete error: ${err}` }));
                                        } else {
                                            res.send(JSON.stringify({ message: "delete success" }));
                                        }
                                    }
                                );
                            } else{
                                res.send(JSON.stringify({ error: "Cannot delete record used in constraint" }));
                            }
                        }
                          
                    
                        }
                   
                    )
                } else{
                    
                    res.send(JSON.stringify({ error: "Cannot delete record used in constraint" }));
                }
                }
            }
            )
        
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });

});



router.post("/update", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            console.log(     "UPDATE accounts SET title =" +
                "'" + body.title +
                "' WHERE account_id = " +
                body.account_id +
                "")
            db.run(
                "UPDATE accounts SET title =" +
                "'" + body.title +
                "' WHERE account_id = " +
                body.account_id +
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
