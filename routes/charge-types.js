var express = require("express");
var router = express.Router();
const db = require("../db");
const auth = require("../auth");



/*The rest is pretty straightforward*/
router.post("/read", function (req, res, next) {
    const body = req.body;
    auth.authorize(body.token, body.username, true, (authorized) => {
        if (authorized) {
            db.get(
                "SELECT * FROM charge_types",
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", charge_types: row }));
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
                "SELECT * FROM charge_types WHERE charge_id = " + body.charge_id,
                (row) => {
                    if (row) {
                        res.send(JSON.stringify({ message: "Read success", charge_type: row[0] }));
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



module.exports = router;
