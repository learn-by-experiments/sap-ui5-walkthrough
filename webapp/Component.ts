import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

interface InputDataModel {
  name: string;
}

/**
 * @namespace sap.ui5.walkthrough
 */
export default class Component extends UIComponent {
  public static metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
    manifest: "json",
  };
  init(): void {
    // call the init function of the parent
    super.init();

    // set data model
    const data: InputDataModel = {
      name: "World",
    };

    const jsonModel = new JSONModel(data);
    this.setModel(jsonModel);
  }
}
