/******************************************
Treehouse Techdegree:
FSJS project 8 - SQL Library Manager
******************************************/

const express = require("express");
const path = require("path");

const routes = require("./routes/index");
const books = require("./routes/books");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
app.use("/books", books);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = Error("Page not found");
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals
	res.locals.message = err.message;
	res.locals.error = err;
	console.log(req.path);
	console.log(err);
	// render the error page
	res.status(err.status || 500);
	res.render("page-not-found");
});

module.exports = app;
