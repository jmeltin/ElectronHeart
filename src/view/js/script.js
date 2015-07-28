////////////////////////////////////////////////////////////
//////////////////  TITLE BAR BUTTONS  /////////////////////
var ipc = require('ipc');
var close = document.getElementById('closeButton');
var minimize = document.getElementById('minimizeButton');

close.addEventListener('click', closeWindow);
minimize.addEventListener('click', minimizeWindow);

function closeWindow() {
	ipc.send("closeWindow");
}
function minimizeWindow() {
	ipc.send("minimizeWindow");
}

////////////////////////////////////////////////////////////
//////////////////  TIME/DATE          /////////////////////
function DateTime() 
{
	var today = new Date();
	this.date = (today.getUTCMonth() + 1) + "/" + today.getUTCDate() + "/" + today.getUTCFullYear();
	this.time = function() {
		var hours = today.getHours();
		var minutes = today.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + '' + ampm;
		return strTime;
	}
}
var dTime = new DateTime();
function handleTimeDate() {
	document.getElementById('time').innerHTML = dTime.time();
	document.getElementById('date').innerHTML = dTime.date;
};
handleTimeDate();
window.setInterval(handleTimeDate, 1000/60);





/* References
	this.time = function() -> http://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
*/