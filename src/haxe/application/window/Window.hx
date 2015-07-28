package application.window;

import electron.main.*;
import js.Node;


class Window
{
	var mainWindow(default, null) :BrowserWindow = null;

	public function new(width: Int, height :Int, file :String, frame :Bool = true) :Void
	{
		_width = width;
		_height = height;
		_file = file;
		init(frame);
	}

	public function closeWindow() :Void
	{
		mainWindow.close();
	}

	public function minimizeWindow() :Void
	{
		mainWindow.minimize();
	}

	private function init(hasFrame :Bool) :Void
	{
		mainWindow = new BrowserWindow({
			width: _width, 
			height: _height, 
			frame: hasFrame,
			resizable: hasFrame,
			transparent: !hasFrame,
			center :true
		});
		mainWindow.loadUrl('file://' + Node.__dirname + '/' + _file + '.html');
		mainWindow.openDevTools();
		mainWindow.setAlwaysOnTop(true);
		mainWindow.on('closed', function() {
			mainWindow = null;
		});

		Ipc.on('closeWindow', closeWindow);
		Ipc.on('minimizeWindow', minimizeWindow);
	}

	private var _width  :Int;
	private var _height :Int;
	private var _file   :String;
}