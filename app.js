var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var productsRouter = require("./routes/api/products");
var samsungRouter = require("./routes/api/Samsung");
var zteRouter = require("./routes/api/ZTE");
var asusRouter = require("./routes/api/Asus");
var appleRouter = require("./routes/api/Apple");
var googleRouter = require("./routes/api/Google");
var htcRouter = require("./routes/api/HTC");
var huaweiRouter = require("./routes/api/Huawei");
var infinixRouter = require("./routes/api/Infinix");
var lgRouter = require("./routes/api/LG");
var motorolaRouter = require("./routes/api/Motorola");
var nokiaRouter = require("./routes/api/Nokia");
var oneplusRouter = require("./routes/api/OnePlus");
var oppoRouter = require("./routes/api/Oppo");
var pocoRouter = require("./routes/api/Poco");
var realmeRouter = require("./routes/api/Realme");
var vivoRouter = require("./routes/api/Vivo");
var xiaomiRouter = require("./routes/api/Xiaomi");
var blackberryRouter = require("./routes/api/BlackBerry");


var config = require("config");
var cors = require('cors');

var app = express();
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/samsung",samsungRouter);
app.use("/api/Apple",appleRouter);
app.use("/api/Asus",asusRouter);
app.use("/api/BlackBerry",blackberryRouter);
app.use("/api/Google",googleRouter);
app.use("/api/HTC",htcRouter);
app.use("/api/Huawei",huaweiRouter);
app.use("/api/Infinix",infinixRouter);
app.use("/api/LG",lgRouter);
app.use("/api/Motorola",motorolaRouter);
app.use("/api/Nokia",nokiaRouter);
app.use("/api/OnePlus",oneplusRouter);
app.use("/api/Oppo",oppoRouter);
app.use("/api/Poco",pocoRouter);
app.use("/api/Realme",realmeRouter);
app.use("/api/Vivo",vivoRouter);
app.use("/api/Xiaomi",xiaomiRouter);
app.use("/api/ZTE",zteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongo...."))
  .catch((error) => console.log(error.message));
module.exports = app;