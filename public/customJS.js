



function nameFunc(){
  if (document.cookie.slice(0,4) === 'name'){
      $("#nameInput").hide();
      $("#loadName").text(document.cookie.slice(5));
      }
  else{
      $(".enter_link").click(function (e) {
        e.preventDefault();
      $("#loadName").text(($("#inputName").val()));
      var username = document.form1.firstName.value;
      document.cookie = "name=" + username;
      $(this).parent("#nameInput").fadeOut(500);
    })
  }
}

function reSubmit(){
  $(".enter_link").click(function (e) {
    e.preventDefault();
  $("#loadName").text(($("#inputName").val()));
  var username = document.form1.firstName.value;
  document.cookie = "name=" + username;
  $(this).parent("#nameInput").fadeOut(500);
})
}

function clearName(){
  $(".change_name").click(function(e){
      e.preventDefault();
      $("#nameInput").fadeIn(300);
      reSubmit();
  })
}

//Clock
function updateClock ( ) {
 	let currentTime = new Date ();
  	let currentHours = currentTime.getHours ();
  	let currentMinutes = currentTime.getMinutes ();
  	//let currentSeconds = currentTime.getSeconds ( );

  	// Pad the minutes and seconds with leading zeros, if required
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	//currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Choose either "AM" or "PM" as appropriate
  	let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	// Convert an hours component of "0" to "12"
  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Compose the string for display
  	let currentTimeString = currentHours + ":" + currentMinutes +" "+timeOfDay;


   	$("#clock").html(currentTimeString);

 }

function greeting(){
  let currentTime = new Date ();
  let currentHours = currentTime.getHours ();
  let greet;
  if (currentHours<12){
    greet="Good Morning";
  }
  if (currentHours >=12 && currentHours<17){
    greet="Good Afternoon";
  }
  else{
    greet="Good Evening";
  }
  $( "#loadGreet" ).text( greet );
}


 function getWeather(){
   var str = "00B0";
   var degreeSign = String.fromCharCode(parseInt(str, 16));
   $.get( "/api/weather", function( data ) {
     var fahrenheit = Math.round(data.temperature)+degreeSign+' F';
    $( "i" ).addClass( data.icon );
    $( "#temp" ).text( fahrenheit );
    });
 }

$(document).ready(function() {
   nameFunc();
   greeting();
   setInterval('greeting()', 1000 * 60 * 60);
   getWeather();
   updateClock();
   setInterval('updateClock()', 1000 * 60);
   clearName();
});
