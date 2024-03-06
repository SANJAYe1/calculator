const calculatorValues = [
  {
    label: "0",
    type: "number",
    value: 0,
    order: 18,
  },
  {
    label: "1",
    type: "number",
    value: 1,
    order: 5,
  },
  {
    label: "2",
    type: "number",
    value: 2,
    order: 6,
  },
  {
    label: "3",
    type: "number",
    value: 3,
    order: 7,
  },
  {
    label: "4",
    type: "number",
    value: 4,
    order: 9,
  },
  {
    label: "5",
    type: "number",
    value: 5,
    order: 10,
  },
  {
    label: "6",
    type: "number",
    value: 6,
    order: 11,
  },
  {
    label: "7",
    type: "number",
    value: 7,
    order: 13,
  },
  {
    label: "8",
    type: "number",
    value: 8,
    order: 14,
  },
  {
    label: "9",
    type: "number",
    value: 9,
    order: 15,
  },
  {
    label: "⌫",
    type: "special",
    value: "x",
    order: 2,
    textColor: "orange",
    fontSize: 16,
  },
  {
    label: "=",
    type: "special",
    value: "eq",
    order: 20,
    color: "red",
  },
  {
    label: "AC",
    type: "special",
    value: "c",
    order: 1,
    fontSize: 16,
    textColor: "red",
  },
  {
    label: "+",
    type: "symbol",
    value: "+",
    order: 4,
  },
  {
    label: "-",
    type: "symbol",
    value: "-",
    order: 8,
  },
  {
    label: "*",
    type: "symbol",
    value: "*",
    order: 12,
  },
  {
    label: "/",
    type: "symbol",
    value: "/",
    order: 16,
  },
  {
    label: "%",
    type: "symbol",
    value: "%",
    order: 17,
  },
  {
    label: ".",
    type: "number",
    value: ".",
    order: 19,
  },
  {
    label: "",
    type: "",
    value: "",
    order: 4,
  },
];

export default function getCalculatorValues() {
  let values = calculatorValues.sort(function (a, b) {
    return a.order - b.order;
  });
  return values;
}
