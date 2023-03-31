var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { Canvas, createCanvas, Image, ImageData, loadImage } = require("canvas");
const { writeFileSync, existsSync, mkdirSync } = require("fs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const Console = require("console");
const cv = require("opencv-sigge");
const adaptiveThreshold = require("adaptive-threshold");
const fs = require("fs");
var app = express();
const savePixels = require("save-pixels");
const getPixels = require("get-pixels");
var frame = new cv.Mat();
var grey = new cv.Mat();
const Jimp = require("jimp");
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
const document = dom.window.document;

const HTMLCanvasElement = Canvas;

const HTMLImageElement = Image;
const wait = async () => {
  const HTMLImageElement = Image;
  console.log("start");
  /*await loadOpenCV();*/

  const image = await loadImage("kvitto.jpg");

  const src = cv.imread(image);
  let gray = new cv.Mat();
  cv.cvtColor(src, gray, cv.COLOR_BGR2GRAY, 0);
  let thresh = new cv.Mat();
  cv.threshold(gray, thresh, 107, 980, cv.THRESH_BINARY);
  let denoised = new cv.Mat();
  const canvas = createCanvas(200, 200);
  cv.imshow(canvas, thresh);
  writeFileSync("output.jpg", canvas.toBuffer("image/jpeg"));
  src.delete();
  gray.delete();
};
wait();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

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
