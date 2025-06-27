import Control from "sap/ui/core/Control";
import UIComponent from "sap/ui/core/UIComponent";
import XMLView from "sap/ui/core/mvc/XMLView";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

interface InputDataModel {
  name: string;
}

/**
 * @namespace sap.ui5.walkthrough
 */
export default class Component extends UIComponent {
  public static metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
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
    // set i18n model on view
    const i18nModel = new ResourceModel({
      bundleName: "sap.ui5.walkthrough.i18n.i18n",
    });

    this.setModel(i18nModel, "i18n");
  }

  createContent(): Control | Promise<Control | null> | null {
    return XMLView.create({
      viewName: "sap.ui5.walkthrough.view.App",
      id: "app",
    });
  }
}
