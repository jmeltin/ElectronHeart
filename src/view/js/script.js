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