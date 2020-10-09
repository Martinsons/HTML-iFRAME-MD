const day = new Date().getDay();

if (day === 1) {
  document.getElementById("d1").style.backgroundColor = "#af7ac5";
} else if (day === 2) {
  document.getElementById("d2").style.backgroundColor = "#af7ac5";
} else if (day === 3) {
  document.getElementById("d3").style.backgroundColor = "#af7ac5";
} else if (day === 4) {
  document.getElementById("d4").style.backgroundColor = "#af7ac5";
} else if (day === 5) {
  document.getElementById("d5").style.backgroundColor = "#af7ac5";
}


const today = new Date();
const date = "Šodien ir - " + today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
document.getElementById("today").innerHTML = date;

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById("time").innerHTML = "Pareizs laiks ir " + h + ":" + m + ":" + s;

  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}