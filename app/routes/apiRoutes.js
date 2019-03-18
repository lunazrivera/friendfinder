var friendData = require("../data/friend");


//Routing
module.exports = function(app) {
     //API GET REQUESTS
     //Below code handles when user "visits" a page
     app.get("/api/friends", function(req, res) {
          res.json(friendData);
     })

     //API POST REQUESTS
     //Below code handles when a user submits form data (a JSON object) 
     app.post("/api/friends", function(req, res) {
          // Here will be the object that will end up being the match
          var friendMatch = {
               userName: "",
               userPhoto: "",
               friendDifference: 1000 
          };

          // Here we are console logging the result of our user values
          console.log(req.body);

          // Binding results
          var userData = req.body;
          var userScores = userData.score;

          console.log(userScores);

          //This value will calculate the difference between the user scores and the scores
          //of each user in the database
          var totalDifference = 0;

          //Now we need to loop through the friends array
          for (let i = 0; i < friendData.length; i++) {
               
               console.log(friendData[i]);
               totalDifference = 0;

               //Now we need to loop through the friends score
               for (let a = 0; a < friendData[i].score[a]; a++ ) {

                    totalDifference += Math.abs(parseInt(userScores[a]) - parseInt(friendData[i].score[a]));

                    if (totalDifference <= friendMatch.friendDifference) {

                         friendMatch.userName = friendData[i].userName;
                         friendMatch.userPhoto = friendData[i].userPhoto;
                         friendMatch.friendDifference = totalDifference;

                    }
               }
          }
          friendData.push(userData);

          res.json(friendMatch);
     })
}

