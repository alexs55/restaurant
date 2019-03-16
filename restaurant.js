var express = require("express");

var app = express();
var path = require("path");
var PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = require("./reservations.js")

var waitlist = require("./waitlist.js")




// Listener
// ===========================================================


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

//   // Displays a single character, or returns false
//   app.get("/api/reservations/table", function(req, res) {
//     var chosen = req.params.table;

//     console.log(chosen);

//     for (var i = 0; i < reservations.length; i++) {
//       if (chosen === reservations[i].routeName) {
//         return res.json(reservations[i]);
//       }
//     }

//     return res.json(false);
//   });

// Create New reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;

    // Using a RegEx Pattern to remove spaces from newreservations
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newreservation.routeName = newreservations.name.replace(/\s+/g, "").toLowerCase();
    res.send(newreservation)
    console.log(newreservation);
    if (reservations.length < 5) {
        reservations.push(newreservation);
        res.json(newreservation);
    } else {
        waitlist.push(newreservation)
        res.json(newreservation);
    }


});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
