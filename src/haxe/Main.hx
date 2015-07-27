package;

import electron.main.*;
import js.Node;

class Main {
	static function main() {
		CrashReporter.start();
		App.on("window-all-closed", function() {
    		App.quit();
		});

		var mainWindow :BrowserWindow = null;
		App.on("ready", function() {
			mainWindow = new BrowserWindow({width: 800, height: 600, frame: true});
			mainWindow.loadUrl('file://' + Node.__dirname + '/index.html');
			mainWindow.on('closed', function() {
				mainWindow = null;
			});
		});
	}
}

