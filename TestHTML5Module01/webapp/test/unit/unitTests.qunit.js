/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/rh/test/TestHTML5Module01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
