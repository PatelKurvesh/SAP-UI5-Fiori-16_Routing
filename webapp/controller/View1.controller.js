sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-16_Routing.controller.View1", {
		
		onInit : function(){
			
			/*var oInfo = new sap.ui.model.json.JSONModel();
			oInfo.loadData("model/student.json");
			this.getView().setModel(oInfo);*/       //no need to write this line for model if you define your model in manifes.json
			
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// this.oRouter.getRoute("View1");
		},
		
		onNext : function(oEvent){
			this.oRouter.navTo("View2");
		},
		onLogin : function(){
			var user = this.getView().byId("user").getValue();
			var pwd = this.getView().byId("pwd").getValue();
			if(user === "admin" && pwd === "admin"){
				// sap.m.MessageToast.show("Login Successfully");
				this.oRouter.navTo("View2");
				
			}else{
				sap.m.MessageToast.show("Error");
			}
		}

	});
});