import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Controller from "sap/ui/core/mvc/Controller";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

export default class InvoiceList extends Controller {
  formatter(status: string) {
    const resourceBundle = (
      this?.getOwnerComponent()?.getModel("i18n") as ResourceModel
    )?.getResourceBundle() as ResourceBundle;
    switch (status) {
      case "A":
        return resourceBundle.getText("invoiceStatusA");
      case "B":
        return resourceBundle.getText("invoiceStatusB");
      case "C":
        return resourceBundle.getText("invoiceStatusC");
      default:
        return status;
    }
  }
}
