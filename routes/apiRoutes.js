var reservations= require('../data/reservations.js');
var waitlist= require('../data/waitlist.js');


module.exports = function(app) {

  // Displays all reservations
  app.get("/api/reservations", function (req, res) {
      return res.json(reservations);
  });

  app.get("/api/waitlist", function (req, res) {
      return res.json(waitlist);
  });


  // Create New reservations - takes in JSON input
  app.post("/api/reservations", function (req, res) {
      var newreservation = req.body;
      res.send(newreservation)
      console.log(newreservation);
      if (reservations.length < 5) {
          reservations.push(newreservation);
      } else {
          waitlist.push(newreservation)
      }
  });

};