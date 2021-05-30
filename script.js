//Function to initially load the page
var loadPage = function () {
  //variable of the date
  var date = moment();

  //variable to capture the correct format for the top of the page
  var day = date.format("dddd, MMMM D");

  //Place day in header
  $("#currentDay").append(day);
};

// Event text was changed
$(".event-text").on("change", function () {
  var newText = $(this).val();

  var eventTextArea = $(this)
    .addClass("col-9 present event-text")
    .text(newText);

  $(this).find("textarea").replaceWith(eventTextArea);
});

//Save a new event on the schedule
$(".event-row").submit(function (event) {
  event.preventDefault();

  var text = $(this).find("textarea").text();

  console.log(text);
});

loadPage();
