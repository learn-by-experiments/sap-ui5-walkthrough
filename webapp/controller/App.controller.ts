import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

interface InputDataModel {
  name: string;
}
export default class AppController extends Controller {
  onInit(): void | undefined {
    const data: InputDataModel = {
      name: "World",
    };

    const jsonModel = new JSONModel(data);
    this.getView()?.setModel(jsonModel);
    // set i18n model on view
    const i18nModel = new ResourceModel({
      bundleName: "sap.ui5.walkthrough.i18n.i18n",
    });

    this.getView()?.setModel(i18nModel, "i18n");
  }
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
}
