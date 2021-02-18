/*Variables declared*/
var timeleft = 10;

var startTime = 0;
var currentTime = 0;
/*function to set min:secs(eg:00:10)*/
function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);/*nf means number format*/
}


function setup() {
  noCanvas();
  startTime = millis();
/*Here we can set the time we want*/
  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  }
/*timer is the name selected from html page*/
  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));

  var interval = setInterval(timeIt, 1000);
/*Here comes the main function */
  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    if (currentTime == timeleft) {
      clearInterval(interval);
      //counter = 0;
    }
  }
}
