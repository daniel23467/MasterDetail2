jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/test/integration/pages/App",
	"com/test/integration/pages/Browser",
	"com/test/integration/pages/Master",
	"com/test/integration/pages/Detail",
	"com/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.view."
	});

	sap.ui.require([
		"com/test/integration/NavigationJourneyPhone",
		"com/test/integration/NotFoundJourneyPhone",
		"com/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});