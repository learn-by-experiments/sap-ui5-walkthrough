import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";

export default class AppController extends Controller {
  onShowHello() {
    MessageToast.show("Hello World");
  }
}
