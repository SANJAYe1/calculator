import _, { isEmpty } from "lodash";
import Button from "./Button";
function ButtonGroup({ values, cols, onSelect }) {
  let noOfCol = values.length / cols;
  let noOfColRange = _.range(0, noOfCol);
  let colsPerRow = [1, 2, 3, 4];
  var i = 0;
  return noOfColRange.map((col) => (
    <div className="btn-group p-0 border-0" key={col + "-" + i}>
      {!isEmpty(values) &&
        i < values.length - 1 &&
        colsPerRow.map((val) => (
          <Button
            key={val + values[i]?.label}
            buttonProp={values[i++]}
            onSelect={onSelect}
          />
        ))}
    </div>
  ));
}

export default ButtonGroup;
