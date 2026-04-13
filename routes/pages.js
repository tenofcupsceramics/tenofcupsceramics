const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Ten of Cups Ceramics" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About — Ten of Cups Ceramics" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact — Ten of Cups Ceramics" });
});

module.exports = router;
