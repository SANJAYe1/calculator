import React, { Component } from "react";
class Button extends Component {
  render() {
    let buttonClass = (button) => {
      let className = "btn button-centre";
      if (button.color) {
        className += " btn-danger";
      } else {
        className += " btn-dark";
      }
      return className;
    };

    let buttonLabelClass = (button) => {
      let className = "";
      if (button.textColor) {
        className += "button-label";
      }
      return className;
    };
    let { buttonProp, onSelect } = this.props;
    return (
      <button
        type="button"
        className={buttonClass(buttonProp)}
        onClick={() => onSelect(buttonProp)}
      >
        <span className={buttonLabelClass(buttonProp)}>
          {" "}
          {buttonProp.label}
        </span>
      </button>
    );
  }
}

export default Button;
