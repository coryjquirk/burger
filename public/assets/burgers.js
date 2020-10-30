$("#burgBtn").click(function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

    
        var newBurg = {
          burger_name: $("#").val().trim(),
          devoured: $("[burger_name=devoured]:checked").val().trim()
        };
    
        // Send the POST request.
        
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurg
        }).then(
          function() {
            console.log("created new burg");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });