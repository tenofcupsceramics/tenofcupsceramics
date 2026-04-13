const http = require("http");
const express = require("express");
const path = require("path");

const shopRouter = require("./routes/shop");
const pagesRouter = require("./routes/pages");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", pagesRouter);
app.use("/shop", shopRouter);

app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Ten of Cups Ceramics running at http://localhost:${PORT}`);
});
