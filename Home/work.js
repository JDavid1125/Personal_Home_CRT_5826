/**
 * 
 */

var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
var realDate = ""+year+"-"+(month+1)+"-"+date+"";

setInterval(showTime, 1000);
function showTime() {
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var am_pm = "AM";

  if (hour > 12){
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }
  
  min= min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  var currentTime = hour + ":" + min + ":" + sec + am_pm;
  
  document.getElementBy Id("clock").innerHTML = currentTime;
}
showTime();

document.getElementById("time").innerHTML = realDate;
document.getElementById("copyYear").innerHTML = year;
