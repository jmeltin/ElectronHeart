package electron.main;

typedef BrowserWindowOptions = {
	?x           : Int,
	?y           : Int,
	width        : Int,
	height       : Int,
	?center      : Bool,
	?resizable   : Bool,
	?fullscreen  : Bool,
	?kiosk       : Bool,
	?title       : String,
	?show        : Bool,
	?frame       : Bool,
	?transparent : Bool
}
