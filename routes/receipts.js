var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");


router.post("/create", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, false, (authorized) => {
        /*Check if the username is taken*/
   
             db.run("INSERT INTO receipts (purchase_date, retailer, category, net, tax, total, receipt_link, product_link, account, VISA, description, report)VALUES ('" +
             body.purchase_date +
                 "','" +
                 body.retailer +
                 "','" +
                 body.category +
                 "','" +
                 body.net +
                 "','" +
                 body.tax +
                 "','" +
                 body.total +
                 "','" +
                 body.receipt_link +
                 "','" + 
                 `${ body.product_link == undefined ? ``: body.product_link }` +
                 "','" +
                 body.account +
                 "','" +
                 body.VISA +
                 "','" +
                 body.description +
                 "','" +
                 body.report +
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

     
    });
});

/*The rest is pretty straightforward*/
router.post("/read", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            db.get(
                "SELECT * FROM receipts",
                (row) => {
                    if (row) {
                        row.array.forEach(element => {
                            element.category = {category_id: element.category }
                            element.account = {account_id: element.account }
                        });
                        console.log(row)
                        res.send(JSON.stringify({ message: "Read success", receipts: row }));
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
                "SELECT * FROM receipts WHERE receipt_id = '" + body.receipt_id + "'",
                (row) => {
                    if (row) {
                         row[0].account ={account_id: row[0].account }
                         row[0].catgeory ={account_id: row[0].category }
                        res.send(JSON.stringify({ message: "Read success", receipt: row[0] }));
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

router.post("/read-report", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
             console.log("SELECT * FROM receipts WHERE report = " + body.report_id + "")
            db.get(
               
                "SELECT * FROM receipts WHERE report = " + body.report_id + "",
                (row) => {
                    if (row) {
                        row.forEach(element => {
                            element.category = {category_id: element.category }
                            element.account = {account_id: element.account }
                        });
                        console.log(row)
                        res.send(JSON.stringify({ message: "Read success", receipts: row }));
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
                "DELETE FROM receipts WHERE receipt_id = '" + body.receipt_id + "'",
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
                "UPDATE receipts SET purchase_date =" +
            "'" + body.purchase_date +
            "', retailer = '" + body.retailer +
            "',category = '" + body.category +
            "',description= '" + body.description +
            "',net = " + body.net +
            ", tax = " + body.tax +
            ", total = " + body.total +
            ", receipt_link = '" + body.receipt_link +
            "', product_link = '" + body.product_link + "'" +
            ", account = '" + body.account +
            "', VISA = " + body.VISA +
            ", report = '" + body.report +
            "' WHERE receipt_id = " +
            body.receipt_id +
            "",
                (err) => {
                    if (err) {
                        res.send(JSON.stringify({ error: `update error: ${err}` }));
                    } else {
                        res.send(JSON.stringify({message: "update success" }));
                    }
                }
            );
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });
});



module.exports = router;
