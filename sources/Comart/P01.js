var today = new Date();
console.log(today);
var today_year = today.getFullYear();
var today_month = today.getMonth();
document.getElementById("year").innerHTML = today_year;
document.getElementById("month").innerHTML = today_month;