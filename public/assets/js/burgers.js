

$(document).ready(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    console.log("boogers")

    var newBurger = $("#ca")
      .val()
      .trim();
    $.ajax({
      method: "POST",
      url: "/api/burgers",
      data: {
        newBurger
      }
    }).then(function(data) {
      console.log("boogers")
      location.reload();
    });
  });

  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");

    var eatenBurgers = {
      eaten: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenBurgers
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });

  });
});
