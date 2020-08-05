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
        created_at: req.body.created_at

    }).then(function(results){

         res.end();
    })
 
})



}
