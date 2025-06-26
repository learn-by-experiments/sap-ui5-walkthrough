import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

interface InputDataModel {
  name: string;
}
export default class AppController extends Controller {
  onInit(): void | undefined {
    const data: InputDataModel = {
      name: "Hello World",
    };

    const jsonModel = new JSONModel(data);
    this.getView()?.setModel(jsonModel);
  }
  onShowHello() {
    const inputMessage: InputDataModel = (
      this.getView()?.getModel() as JSONModel
    ).getData();
    MessageToast.show(inputMessage.name);
  }
}
