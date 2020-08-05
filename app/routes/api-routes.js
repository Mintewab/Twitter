var Tweet = require("../models/twitter.js");


module.exports = function(app){
app.get("/api/all", function(req,res){

        Tweet.findAll({}).then(function(results){
            res.json(results)
        });
})

app.post("/api/new", function(req,res){

    Tweet.create({
        author: req.body.author,
        body: req.body.body,
        createdAt: req.body.createdAt

    }).then(function(results){

         res.end();
    })
 
})



}
