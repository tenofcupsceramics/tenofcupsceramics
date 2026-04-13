const express = require("express");
const router = express.Router();
const items = require("../data/items");

router.get("/", (req, res) => {
  const { category } = req.query;
  const categories = [...new Set(items.map((i) => i.category))];
  const filtered = category
    ? items.filter((i) => i.category === category)
    : items;

  res.render("shop", {
    title: "Shop — Ten of Cups Ceramics",
    items: filtered,
    categories,
    activeCategory: category || null,
  });
});

router.get("/:slug", (req, res) => {
  const item = items.find((i) => i.slug === req.params.slug);
  if (!item) return res.status(404).render("404", { title: "Page Not Found" });

  res.render("item", {
    title: `${item.name} — Ten of Cups Ceramics`,
    item,
  });
});

module.exports = router;
