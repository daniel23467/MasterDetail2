jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list
// * All 3 Employees have at least one Orders

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
		"com/test/integration/MasterJourney",
		"com/test/integration/NavigationJourney",
		"com/test/integration/NotFoundJourney",
		"com/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});