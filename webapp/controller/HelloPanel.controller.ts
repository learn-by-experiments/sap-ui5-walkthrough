import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Dialog from "sap/m/Dialog";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace sap.ui5.walkthrough.controller
 */
export default class HelloPanel extends Controller {
  private dialog: Dialog;
  onShowHello() {
    const inputMessage = (this.getView()?.getModel() as JSONModel).getProperty(
      "/name"
    );

    const i18Bundle = (
      this.getView()?.getModel("i18n") as ResourceModel
    ).getResourceBundle() as ResourceBundle;
    const msg = i18Bundle.getText("helloMsg", [inputMessage]);
    MessageToast.show(msg as string);
    console.log("check the msg : ", msg, i18Bundle);
  }

  async onOpenDialog() {
    this.dialog = (await this.loadFragment({
      name: "sap.ui5.walkthrough.view.HelloDialog",
    })) as Dialog;
    this.dialog?.open();
  }

  onCloseDialog() {
    this.dialog?.close();
    this.dialog?.destroy();
  }
}
