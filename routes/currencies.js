var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");


router.post("/create", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, false, (authorized) => {
        /*Check if the username is taken*/
        if (authorized) {
             db.run("INSERT INTO currencies (title)VALUES ('" +
                 body.title +

                 "')",
                            (err) => {
                                if (err) {
                                    res.send(
                                        JSON.stringify({ error: `"currency creation error: ${err}` })
                                    );
                                } else {
                                    res.send(JSON.stringify({ message: "currency created" }));
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
                "SELECT * FROM currencies",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", currencies: row }));
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
                "SELECT * FROM currencies WHERE currency_id = " + body.currency_id,
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", currency: row[0] }));
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
           
           
                   

                        
                                db.run(
                                    "DELETE FROM currencies WHERE currency_id = '" + body.currency_id + "'",
                                    (err) => {
                                        if (err) {
                                            res.send(JSON.stringify({ error: `delete error: ${err}` }));
                                        } else {
                                            res.send(JSON.stringify({ message: "delete success" }));
                                        }
                                    }
                                );
                          
                      
                  
                
        
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
                "UPDATE currencies SET title =" +
                "'" + body.title +
                "' WHERE currency_id = " +
                body.currency_id +
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
