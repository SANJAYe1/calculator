import React, { Component } from "react";
import _ from "lodash";
import ButtonGroup from "./ButtonGroup";
import getCalculatorValues from "../calculator";
import { evaluate } from "mathjs";
import { toast } from "react-toastify";

class Calculator extends Component {
  state = {
    buttonValues: [],
    expression: "",
    result: 0,
  };

  componentDidMount() {
    let values = getCalculatorValues();
    this.setState({ buttonValues: values });
  }
  inputHandler = (button) => {
    let { expression = "" } = this.state;
    let { type, value, label } = button;
    if (["number", "symbol"].includes(type)) {
      expression += label;
      if (expression.length > 14) {
        toast.error("Expression should be less than 14 characters");
        return;
      }
      this.setState({ expression });
    } else if (type == "special")
      switch (value) {
        case "eq": // equals
          this.evaluateExpresstion();
          break;
        case "c": //clear all
          this.setState({
            expression: "",
            result: 0,
          });
          break;
        case "x": // backspace
          this.setState({
            expression: expression.slice(0, expression.length - 1),
          });
          break;
        default:
      }
  };
  evaluateExpresstion = () => {
    let { expression } = this.state;
    let res = evaluate(expression);
    this.setState({ result: res });
  };
  render() {
    let { buttonValues, expression, result } = this.state;
    return (
      <>
        <div className="container text-center calculator-container h-75">
          <div className="row align-items-start h-100 w-100 rounded box-sh ">
            <div className="col-7 w-60 calculator-header">
              <span className="title"> My Calculator</span>
              <span className="caption">
                A Simple Calculator that can perform basic arithmetic operations
                such as addition, subtraction, multiplication,modulus and
                division.
              </span>
            </div>
            <div className="col h-100 w-40">
              <div className="row h-25 flex-row d-flex justify-content-end p-3 bg-secondary text-white result-container">
                <div className="d-flex justify-content-end">{expression}</div>
                <div className="d-flex justify-content-end display-4">
                  {result}
                </div>
              </div>
              <div className="row h-75 bg-dark text-white button-container">
                <ButtonGroup
                  values={buttonValues}
                  cols={4}
                  onSelect={this.inputHandler}
                ></ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
