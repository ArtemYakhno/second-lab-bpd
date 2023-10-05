import Card from "../UI/Card";
import style from "./Result.module.css";

const ResultInverse = (props) => {
  let finalyResult = "Виконайте обрахунок";

  let A = parseInt(props.date.valueA);
  let P = parseInt(props.date.valueP);
  function calculateModularInverse(a, p) {
    for (let x = 1; x < p; x++) {
      if ((a * x) % p === 1) {
        return x;
      }
    }
    return null; // Зворотний елемент не існує
  }
  function calculateEulerPhi(p) {
    let eulerPhi = 1;
    for (let i = 2; i < p; i++) {
      if (gcd(i, p) === 1) {
        eulerPhi++;
      }
    }
    return eulerPhi;
  }
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const eulerPhi = calculateEulerPhi(P);
  const inverseElement = calculateModularInverse(A, eulerPhi);

  finalyResult = `a^-1 (зворотний елемент) = ${inverseElement} (по модулю ${P})`;
  console.log("result 3")
  return (
    <Card cssClass={style.result}>
      <h1>Результат</h1>
      <h2>{finalyResult}</h2>
    </Card>
  );
};

export default ResultInverse;
