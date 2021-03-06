
$("#tweet-submit").on("click", function(event) {
    event.preventDefault();
  
    var newTweet = {
      author: $("#author").val().trim(),
      body: $("#tweet-box").val().trim(),
      createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
  
  
    $.post("/api/new", newTweet)
   
      .then(function() {
  
        var row = $("<div>");
        row.addClass("tweet");
  
        row.append("<p>" + newTweet.author + " tweeted: </p>");
        row.append("<p>" + newTweet.body + "</p>");
        row.append("<p>At " + moment(newTweet.createdAt).format("h:mma on dddd") + "</p>");
  
        $("#tweet-area").prepend(row);
        
  
      });
  
    
    $("#author").val("");
    $("#tweet-box").val("");
  });
  

  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("tweet");
  
        row.append("<p>" + data[i].author + " tweeted.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].createdAt).format("h:mma on dddd") + "</p>");
  
        $("#tweet-area").prepend(row);
        
  
      }
  
    }
  
  });