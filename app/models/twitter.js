var  Sequelize = require("sequelize")

var sequelize = require("../config/connnection.js")



var Tweet = sequelize.define("tweet", {
    author: Sequelize.STRING, 
    body: Sequelize.STRING,
    created_at: Sequelize.DATE
})

Tweet.sync()

module.exports = Tweet;