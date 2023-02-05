# SAP-UI5-Fiori-16_Routing

Step 1) Write routing>config>routs>targets code.
<pre>"routing": {
			"config": {
				"routerClass": "sap.m.routing.Router",
				"viewType": "XML",
				"viewPath": "GithubSAP-UI5-Fiori-16_Routing.view",
				"controlId": "idApp",
				"controlAggregation": "pages"
				
			},
			"routes": [{
				"name": "View1",
				"target": ["View1"],
				"pattern" : ""
				
			}, {
				"name": "View2",
				"target": ["View2"],
				"pattern" : "view2" 
				
			}],
			"targets": {
				"View1": {
					"viewType": "XML",
					"transition": "flip",
					"viewName": "View1",
					"viewId": "View1"
				
				},
				"View2": {
					"viewType": "XML",
					"transition": "flip",
					"viewName": "View2",
					"viewId": "View2"
				
				}
				
			}
		}
</pre>

Step 2) Set initialize in component.js 

component.js is driver of your application.
<pre>	//enable routing
		this.getRouter().initialize(); 
			</pre>
			
Step 3) use this class to rout the pages.
<pre>this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);</pre>