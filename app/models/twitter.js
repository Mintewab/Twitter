var  Sequelize = require("sequelize")

var sequelize = require("../config/connection")



var Tweet = sequelize.define("tweet", {
    author: Sequelize.STRING, 
    body: Sequelize.STRING,
    createdAt: Sequelize.DATE
})

Tweet.sync()

module.exports = Tweet;