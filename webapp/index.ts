import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
  id: "container",
  name: "sap.ui5.walkthrough",
  settings: {
    id: "walkthrough",
  },
  autoPrefixId: true,
  async: true,
}).placeAt("content");
