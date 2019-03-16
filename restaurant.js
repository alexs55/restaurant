var express = require("express");

var app = express();
var PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var reservations = require("./data/reservations.js")

// var waitlist = require("./data/waitlist.js")

// Routes
// ===========================================================
require ("./routes/apiRoutes.js")(app);
require ("./routes/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
