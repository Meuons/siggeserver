var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { createCanvas, loadImage } = require("canvas");
const { writeFileSync } = require("fs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var receiptsRouter = require("./routes/receipts");
var categoriesRouter = require("./routes/categories");
var reportsRouter = require("./routes/reports");
var imagesRouter = require("./routes/images");
var accountsRouter = require("./routes/accounts");
var wageTypeRouter = require("./routes/wage-types");
var cors = require("cors");
const cv = require("opencv-sigge");
const fs = require('fs');

var app = express();

const Tesseract = require('tesseract.js')


const extractDataFromReceipt = () => {
    const imageFile = './kvitto.jpg';
    const imageBuffer = fs.readFileSync(imageFile);

    Tesseract.recognize(imageFile)

        .then(result => {
            console.log(result.text);
        });
}



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(cors({ origin: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/receipts", receiptsRouter);
app.use("/reports", reportsRouter);
app.use("/images", imagesRouter);
app.use("/categories", categoriesRouter);
app.use("/accounts", accountsRouter);
app.use("/wage-types", wageTypeRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
