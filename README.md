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