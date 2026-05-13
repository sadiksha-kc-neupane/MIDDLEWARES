const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("this is middleware");
//   next();
// });

// //logger- morgan
// app.use((req, res, next) => {
//   req.time = new Date(Date.now().toString());
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//this is a middleware that will be executed for all routes that start with /api it will check if the token is correct, if it is, it will call next() to move to the next middleware or route handler, if it is not, it will send "Access Denied" as a response and will not call next() so the request will not proceed to the next middleware or route handler

const apiMiddleware = (req, res, next) => {
  let { token } = req.query;
  if (token === "12345") {
    return next();
  }
  throw new ExpressError(401, "ACCESS DENIED");
};

app.get("/api", apiMiddleware, (req, res) => {
  res.send(
    "This is the API route with middleware as a second argument or function",
  );
});

//this is a catch all route, it will be executed if no other route matches

app.get("/err", (req, res) => {
  hello = helloooo;
});

app.use((err, req, res, next) => {
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

//this is a route that will throw an error with status code 403 and message "Access to admin is forbidden"
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is forbidden");
});

// app.use((err, req, res, next) => {
//   console.error("----ERROR2------");
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
