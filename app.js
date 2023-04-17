var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { createCanvas, loadImage } = require("canvas");
const { writeFileSync } = require("fs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const cv = require("opencv-sigge");

var app = express();
/*The image manipulation is commented away until
we find a way to send images to the server
 */

/*const wait = async () => {
  console.log("start");
  await loadOpenCV();

  const image = await loadImage("kvitto.png");

  const src = cv.imread(image);
  let gray = new cv.Mat();
  cv.cvtColor(src, gray, cv.COLOR_BGR2GRAY, 0);
  let thresh = new cv.Mat();
  cv.threshold(gray, thresh, 157, 900, cv.THRESH_BINARY);
  const canvas = createCanvas(200, 200);
  cv.imshow(canvas, thresh);
  writeFileSync("output.jpg", canvas.toBuffer("image/jpeg"));
  src.delete();
  gray.delete();
};
wait();*/

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
