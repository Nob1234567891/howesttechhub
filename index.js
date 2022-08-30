const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000:");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/register", (req, res) => {
  res.render("register");
});
