//Function to initially load the page
var loadPage = function () {
  //variable of the date
  var date = moment();

  //variable to capture the correct format for the top of the page
  var day = date.format("dddd, MMMM D");

  //Place day in header
  $("#currentDay").append(day);

  //load event elements onto page
  var events = $("#schedule").children();

  var currentTime = moment().format("H");
  console.log("curent time is " + currentTime);

  //Loop through elements to add correct color TODO and event description if saved
  for (var i = 0; i < events.length; i++) {
    var eventEl = $(events[i]);
    var timeEl = eventEl.text().trim();
    var timeMoment = moment(timeEl, "H A");
    if (parseInt(timeMoment.format("H")) < parseInt(currentTime)) {
      eventEl.find("textarea").removeClass("future present").addClass("past");
    } else if (parseInt(timeMoment.format("H")) == parseInt(currentTime)) {
      eventEl.find("textarea").removeClass("future past").addClass("present");
    } else {
      eventEl.find("textarea").removeClass("past present").addClass("future");
    }
  }
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
