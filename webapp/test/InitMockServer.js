sap.ui.define([
	"soa/salesorderanalysis/localService/mockserver"
], function (mockserver) {
	"use strict";
    debugger
	// initialize the mock server
	
	mockserver.init();

	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});