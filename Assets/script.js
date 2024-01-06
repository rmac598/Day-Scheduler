// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
     
var timeDisplayEl = $('#currentDay');

// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  /*var timeDisplayEl = $('#currentDay');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  
  setInterval(displayTime, 1000);*/
  
  //if (rightNow === "#"

  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  

 var arr = []

 //let saveproject = localStorage.getItem("project",JSON.stringify(arr))||[]
 
$(".saveBtn").on("click", function () {
  var block = $(this).siblings("textarea").val();
  console.log($(this).siblings("textarea").val());
  var usersnotes = {
  time: $(this).siblings("div").text(),
    text: block
  }
arr.push(usersnotes)
/*saveBtn.on("click", function() {
  var time = $(this).siblings(".hour").text();
  var task = $(this).siblings(".description").val();

  localStorage.setItem(time, task);
  localStorage.getItem(time, task);*/


  localStorage.setItem("project",JSON.stringify(arr));
  //localStorage.getItem("project",JSON.stringify(arr));
  
   
    })
  }
  
);


function useTask() {
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currTask = localStorage.getItem(currHour);

    if (currTask !== null) {
     $(this).siblings("description").val(currTask);
     localStorage.getItem("project",JSON.stringify(arr));
  
    }
  });
}
useTask();

var timeDisplayEl = $('#currentDay');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  
  setInterval(displayTime, 1000);

/*function savetopage(){
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currTask = localStorage.getItem(currHour);

    if (currTask!== null) {
      $(this).siblings(".description").val(currTask);
     } ;
  }}
savetopage();*/

