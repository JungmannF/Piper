/*global QUnit*/

sap.ui.define([
	"project1/controller/FrankPiper.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FrankPiper Controller");

	QUnit.test("I should test the FrankPiper controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
