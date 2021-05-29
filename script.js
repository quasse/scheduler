//Function to initially load the page
var loadPage = function () {
  //variable of the date
  var date = moment();

  //variable to capture the correct format for the top of the page
  var day = date.format("dddd, MMMM D");

  //Place day in header
  $("#currentDay").append(day);
};

//Save a new event on the schedule
$(".saveBtn").click(function (event) {
  event.preventDefault();

  //get form values
  var text = $("text").val();
  console.log(event.target);
});

loadPage();
