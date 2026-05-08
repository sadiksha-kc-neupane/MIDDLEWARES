const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  let { query } = req.query;
  console.log("query", query);
  res.send("this is middleware");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
