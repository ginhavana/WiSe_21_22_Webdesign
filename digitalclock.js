const d = new Date();
let year = d.getFullYear();
let month = d.getMonth() + 1;
let date = d.getDate();
let hour = d.getHours();

// const eMonths = ["January", "February", "March",
		// "April", "May", "June",
		// "July", "August", "September",
		// "October", "November", "December"];
// const eDays = ["Sunday", "Monday", "Tuesday",
		// "Wednesday", "Thursday", "Friday", "Saturday"];
// let eDay = eDays[d.getDay()];
// let eMonth = eMonths[month - 1];
	
var eclock = document.getElementById("eclock");
eclock.innerHTML = d;

setTimeout(function(){
   window.location.reload(1);
}, 1000);
	
// function showtime(){
	// eclock();
	// // dclock();
// }

// function eclock(){
	// const eMonths = ["January", "February", "March",
		// "April", "May", "June",
		// "July", "August", "September",
		// "October", "November", "December"];
	// const eDays = ["Sunday", "Monday", "Tuesday",
		// "Wednesday", "Thursday", "Friday", "Saturday"];
	// let eDay = eDays[d.getDay()];
	// let eMonth = eMonths[month - 1];
	
	// var eclock = document.getElementById("eclock");
	// eclock.innerHTML = d;
		// // "English format: " +
		// // eDay + " " + eMonth + " "
		// // + date + "th " + year;
// }

// function dclock(){
	// var dclock = document.getElementById("dclock");
	// const dMonths = ["Januar", "Februar", "M&auml;rz",
		// "April", "Mai", "Juni",
		// "July", "August", "September",
		// "Oktober", "November", "Dezember"];
	// const dDays = ["Sontag", "Montag", "Dienstag",
		// "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
	// let dDay = dDays[d.getDay()];
	// let dMonth = dMonths[month - 1];
	// dclock.innerHTML =
		// "German format: " + dDay + " " + date + "."
		// + month + "." + year + " (" + dDay + " " + date
		// + " " + dMonth + " " + year  + ")";
// }
