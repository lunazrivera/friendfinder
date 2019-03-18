// Dependencies required in order to give our server useful functionality
var express = require("express");
var path = require("path");

// Initializing our app instance of the express function
var app = express();

// Port initialization
var PORT = process.env.PORT || 8080;

// Setting up the express data parsing.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routing to point our server to a series of route files.
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoute")(app);

// Here we are making the listen on a specific PORT designated by our PORT Variable.
app.listen(PORT, function() {
     console.log("Application listening on PORT: http://localhost:" + PORT);
})
