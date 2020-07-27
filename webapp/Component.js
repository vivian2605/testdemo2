jQuery.sap.declare("ssaas.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("ssaas.Component", {
	metadata: {
		"manifest": "json"
	}
});