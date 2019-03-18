// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
     //HTML GET Requests
     // Code bellow handles when users "visit" a page.
     app.get("/survey", function(req, res) {
          res.sendFile(path.join(__dirname, "../public/survey.html"));
     });

     app.get("*", function(req,res) {
          res.sendFile(path.join(__dirname, "../public/home.html"))
     })
}