const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("this is middleware");
//   next();
// });

//logger- morgan
app.use((req, res, next) => {
  req.time = new Date(Date.now().toString());
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});
