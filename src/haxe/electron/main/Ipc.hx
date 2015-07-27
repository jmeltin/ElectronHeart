package electron.main;

import js.node.events.EventEmitter;

@:jsRequire("ipc")
extern class Ipc extends EventEmitter<Ipc> {
	static function on(eventType : String, callback : Void -> Void) : Void;
}
