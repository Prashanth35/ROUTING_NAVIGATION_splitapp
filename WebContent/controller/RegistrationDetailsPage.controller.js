sap.ui.controller("com.smax.empreg.routing.controller.RegistrationDetailsPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zemp_reg_app_1.RegistrationDetailsPage
*/
	onInit: function() {
		var oModel= new sap.ui.model.json.JSONModel();
		oModel.loadData("model/EmployeeData.json");
		this.getView().setModel(oModel);
		
		this.getView().byId("empRegDetailsForm").bindElement("/Employee/Personal/");

	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zemp_reg_app_1.RegistrationDetailsPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zemp_reg_app_1.RegistrationDetailsPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zemp_reg_app_1.RegistrationDetailsPage
*/
//	onExit: function() {
//
//	}

});