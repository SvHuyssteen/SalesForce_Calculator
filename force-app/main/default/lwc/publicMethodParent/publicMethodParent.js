import { LightningElement } from "lwc";

export default class PublicMethodParent extends LightningElement {
  value;
  checkBoxSelectHandler = () => {
    const childComponent = this.template.querySelector("c-public-method-child");
    childComponent.selectCheckBox(this.value);
  };

  onInputChangeHandler = (e) => {
    this.value = e.target.value;
  };
}
