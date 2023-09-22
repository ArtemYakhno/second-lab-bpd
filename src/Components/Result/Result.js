import Card from "../UI/Card";
import style from "./Result.module.css";


const Result = (props) => {
  let finalyResult = 0;
  const add = (valueA, valueB, module) => {
    let result = (valueA+valueB)%module
    return result
  };

  const inverse = (valueA,valueB, module) => {
    let result = (-valueA+ valueB)%module
    return result
  };

  const subtract = (valueA, valueB, module) => {
    let result = (valueA-valueB+module)%module
    return result
  };

  const multiply = (valueA, valueB, module) => {
    let result = (valueA*valueB)%module
    return result
  };

  const power = (valueA, valueB, module) => {
    let result = 1;
    for (let i = 0; i < valueB; i++) {
      result = (result * valueA) % module;
    }
    return result;
  };

  const currentFunction = props.date.buttonName;
  let A = parseInt(props.date.valueA);
  let B = parseInt(props.date.valueB);
  let M = parseInt(props.date.module);

  if (currentFunction === "add") {finalyResult = add(A, B, M)};
  if (currentFunction === "inverse") {finalyResult = inverse(A, B, M)};
  if (currentFunction === "subtract") {finalyResult = subtract(A, B, M)};
  if (currentFunction === "multiply") {finalyResult = multiply(A, B, M)};
  if (currentFunction === "power") {finalyResult = power(A, B, M)};
 
  return (
    <Card cssClass={style.result}>
      <h1>Результат</h1>
      <h2>{finalyResult}</h2>
    </Card>
  );
};

export default Result;
