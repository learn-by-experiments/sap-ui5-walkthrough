import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
/**
 * @namespace sap.ui5.walkthrough.controller
 */
export default class AppController extends Controller {
  onInit(): void {
    const viewModel = new JSONModel({
      currency: "EUR",
    });
    this.getView()?.setModel(viewModel, "view");
  }
}
