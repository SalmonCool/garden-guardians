//Script that places header.html at the top of the page using jQuery
$(document).ready(function(){
    $("#header").load("header.html", function(response, status, xhr) {
        console.log(response); // This will log the HTML content loaded from header.html
        console.log(status); // This will log the status of the request ("success", "error", etc.)
        if (status == "error") {
            console.log(xhr.status + ": " + xhr.statusText); // This will log any error message
        }
    })
  });