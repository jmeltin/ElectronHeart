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
function handleTimeDate() {
	document.getElementById('time').innerHTML = new DateTime().time();
	document.getElementById('date').innerHTML = new DateTime().date;
};
handleTimeDate();
window.setInterval(handleTimeDate, 1000/60);

////////////////////////////////////////////////////////////
//////////////////  EVENT LOGGER       /////////////////////
var logWindow = document.getElementById('logWindow');
var logScrollHeight = logWindow.scrollHeight;
var logLength = 0;
var logMaxLength = 50;
function logEvent(dangerLevel, text) {
	var item = document.createElement('log-item');
	var time = document.createElement('log-time');
	var content = document.createElement('log-content');
	time.innerHTML = new DateTime().time();
	time.setAttribute('palette', dangerLevel);
	content.innerHTML = text;

	logWindow.appendChild(item);
	item.appendChild(time);
	item.appendChild(content);

	if(logWindow.scrollHeight > logScrollHeight) {
		logWindow.scrollTop = logWindow.scrollHeight - logScrollHeight;
	}

	if(++logLength >= logMaxLength) {
		logWindow.removeChild(logWindow.firstChild);
	}
}

////////////////////////////////////////////////////////////
//////////////////  SETTINGS           /////////////////////
var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearLog);
function clearLog() {
	while(logWindow.hasChildNodes())
		logWindow.removeChild(logWindow.firstChild);
}









/* References
	this.time = function() -> http://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
*/