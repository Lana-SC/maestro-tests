var date = new Date();
var month = ("0" + (date.getMonth() + 1)).slice(-2);
var day = ("0" + date.getDate()).slice(-2);
var year = ("" + date.getFullYear()).slice(-2);
output.todayDate = month + "/" + day + "/" + year;

// Debugging output
console.log("TodayDate from script:", output.todayDate);