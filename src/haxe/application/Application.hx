package application;

import application.window.Window;
import electron.main.*;
import js.Node;

class Application
{
	public static function start() :Void
	{
		CrashReporter.start();
		App.on("window-all-closed", function() {
    		App.quit();
		});

		App.on("ready", function() {
			var window = new Window(800, 600, "index", false);
		});
	}
}