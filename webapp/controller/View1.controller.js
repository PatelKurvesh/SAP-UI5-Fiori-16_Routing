sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-16_Routing.controller.View1", {
		
		onInit : function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("View1");
		},
		
		onNext : function(oEvent){
			this.oRouter.navTo("View2");
		}

	});
});