sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-16_Routing.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf GithubSAP-UI5-Fiori-16_Routing.view.View2
		 */
		//	onInit: function() {
		//
		//	},
			onInit: function() {
				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.getRoute("View2");
			},
			onBack : function(){
				this.oRouter.navTo("View1");          
			},
			
			onSearchItem : function(oEvent){
				var queryString = oEvent.getParameter("query");
				var oBranch = new sap.ui.model.Filter("branch",sap.ui.model.FilterOperator.Contains,queryString);
				var oName = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,queryString);
				var oRollnumber = new sap.ui.model.Filter("rollnumber",sap.ui.model.FilterOperator.Contains,queryString);
				var oMobile = new sap.ui.model.Filter("mobile",sap.ui.model.FilterOperator.Contains,queryString);
				
				var masterFilter = new sap.ui.model.Filter({
					filters:[oBranch,oName,oRollnumber,oMobile],
					and : false
				});
				
				
				var aFilter=[masterFilter];
				var student = this.getView().byId("student");
				
				student.getBinding("rows").filter(aFilter);
			}


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf GithubSAP-UI5-Fiori-16_Routing.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf GithubSAP-UI5-Fiori-16_Routing.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf GithubSAP-UI5-Fiori-16_Routing.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});