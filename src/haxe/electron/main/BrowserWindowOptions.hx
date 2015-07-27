package electron.main;

typedef BrowserWindowOptions = {
	?x                : Int,
	?y                : Int,
	width             : Int,
	height            : Int,
	?useContentSize   : Bool,
	?center           : Bool,
	?minWidth         : Bool,
	?minheight        : Bool,
	?maxWidth         : Bool,
	?maxheight        : Bool,
	?resizable        : Bool,
	?alwaysOnTop      : Bool,
	?fullscreen       : Bool,
	?skipTaskbar      : Bool,
	?zoomFactor       : Float,
	?kiosk            : Bool,
	?title            : String,
	// ?icon           : NativeImage
	?show             : Bool,
	?frame            : Bool,
	?nodeIntegration  : Bool,
	?acceptFirstMouse : Bool
}
