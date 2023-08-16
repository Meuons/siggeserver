var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");


router.post("/create", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, false, (authorized) => {
        /*Check if the username is taken*/

             db.run("INSERT INTO expenditure_reports (report_date, net, tax, total, user, title) VALUES ('" +
                 body.date +
                 "','" +
                 body.net +
                 "','" +
                 body.tax +
                 "','" +
                 body.total +
                 "','" +
                 body.user +
                 "','" +
                 body.title +
                 "');",
                            (err) => {
                                if (err) {
                                    res.send(
                                        JSON.stringify({ message: `"receipt creation error: ${err}` })
                                    );
                                } else {
                                    db.get("SELECT last_insert_rowid();",
                                    (row) => {
                                        if (row) {
                                            const id = row[0]["last_insert_rowid()"];
                                            res.send(JSON.stringify({ message: "Read success", report_id: id}));
                                        } else {
                                            res.send(JSON.stringify({ error: "No data found" }));
                                        }
                                    }
                                    )
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
                "SELECT * FROM expenditure_reports",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", reports: row }));
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

router.post("/read-user", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            db.get(
                "SELECT * FROM expenditure_reports WHERE user = '" + body.user + "'",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", reports: row }));
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
                "SELECT * FROM expenditure_reports WHERE report_id = " + body.report_id + "",
                (row) => {
                    if (row) {
                        row[0].category = {category_id: row[0].category}
                        res.send(JSON.stringify({ message: "Read success", report: row[0] }));
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
                "DELETE FROM expenditure_reports WHERE report_id = '" + body.report_id + "'",
                () => {
                    db.run(
                        " DELETE FROM receipts WHERE report =  '" + body.report_id + "'",
                        (err) => {
                        if (err) {
                            res.send(JSON.stringify({ message: `delete error: ${err}` }));
                        } else {
                            res.send(JSON.stringify({ error: "delete success" }));
                        }
                        }
                        )
             
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
                "UPDATE expenditure_reports SET report_date =" +
                "'" + body.date +
                "',net = " + body.net +
                ",tax = " + body.tax +
                ", total = " + body.total +
                ", title =  '" + body.title +
                "' WHERE report_id = " +
                body.report_id +
                "",
                (err) => {
                    if (err) {
                        res.send(JSON.stringify({ error: `update error: ${err}` }));
                    } else {
                        res.send(JSON.stringify({ message: "update success", report_id: body.report_id  }));
                    }
                }
            );
        } else {
            res.send(JSON.stringify({ error: "unauthorized" }));
        }
    });
});



module.exports = router;
