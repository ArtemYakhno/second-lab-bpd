import Card from "../UI/Card";
import style from "./Result.module.css";

const ResultEkvlid = (props) => {
  let result = "";
  let gcdFunction = (a = 0, b = 0) => {
    for (; b !== 0; ) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const A = parseInt(props.date.valueA);
  const B = parseInt(props.date.valueB);

  if (Number.isInteger(A) && Number.isInteger(B)) result = gcdFunction(A, B);
  return (
    <Card cssClass={style.result}>
      <h1>Результат</h1>
      <h2>{result}</h2>
    </Card>
  );
};

export default ResultEkvlid;
