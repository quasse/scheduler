var savedEvents = [];
var newDay = true;

//Function to initially load the page
var loadPage = function () {
  //variable of the date
  var date = moment();

  //variable to capture the correct format for the top of the page
  var day = date.format("dddd, MMMM D");

  //Place day in header
  $("#currentDay").append(day);

  //localStorage.setItem("date", day);

  //Check for the last time the page was loaded
  var dayCheck = localStorage.getItem("date");

  //If the page has already been loaded today, set newDay to false and clear localStorage
  // if (dayCheck !== day) {
  //   newDay = false;
  // }

  //eventsArr = localStorage.getItem(events);

  //load event elements onto page
  var events = $("#schedule").children();

  //Get current time
  var currentTime = moment().format("H");

  savedEvents = JSON.parse(localStorage.getItem("events"));

  //Loop through elements to add correct color TODO and event description if saved
  for (var i = 0; i < events.length; i++) {
    var eventEl = $(events[i]);

    //Variables to time of each row
    var timeEl = eventEl.text().trim();
    var timeMoment = moment(timeEl, "H A");

    //Variable to capture textarea of each row
    var textBox = eventEl.find("textarea");

    // Check which color each row should be
    if (parseInt(timeMoment.format("H")) < parseInt(currentTime)) {
      textBox.removeClass("future present").addClass("past");
    } else if (parseInt(timeMoment.format("H")) == parseInt(currentTime)) {
      textBox.removeClass("future past").addClass("present");
    } else {
      textBox.removeClass("past present").addClass("future");
    }

    //Add saved elements to the text area
    textBox.text(savedEvents[i]);
  }
};

// Event text was changed
$(".event-text").on("change", function () {
  var newText = $(this).val();

  var eventTextArea = $(this).addClass("col-9 event-text").text(newText);

  $(this).find("textarea").replaceWith(eventTextArea);
});

//Save a new event on the schedule
$(".event-row").submit(function (event) {
  event.preventDefault();

  var text = $(this).find("textarea").text();

  //Get the correct place to put the event
  var arrPlace = $(this).attr("event-form-id");

  //Set the text in savedEvents
  savedEvents[arrPlace] = text;

  localStorage.setItem("events", JSON.stringify(savedEvents));
});

loadPage();
