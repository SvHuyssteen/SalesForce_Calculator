import { LightningElement, track, api } from "lwc";

export default class PublicMethodChild extends LightningElement {
  @track value = ["Red"];

  options = [
    { label: "Red Marker", value: "Red" },
    { label: "Blue Marker", value: "Blue" },
    { label: "Green Marker", value: "Green" },
    { label: "Yellow Marker", value: "yellow" }
  ];

  @api selectCheckBox(checkBoxValue) {
    const selectedCheckBox = this.options.find((checkBox) => {
      return checkBoxValue === checkBox.value;
    });

    if (selectedCheckBox) {
      this.value = selectedCheckBox.value;
      return "successfully checked";
    }
    return "no CheckBox Found";
  }
}
