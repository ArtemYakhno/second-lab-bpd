import Card from "../UI/Card";
import style from "./Result.module.css";

const ResultEyler = (props) => {
  function eulerPhi(n) {
    console.log("gfsghfdeh");
    let result = n; // Ініціалізуємо результат значенням n

    // Знаходимо всі прості числа, які ділять n
    for (let p = 2; p * p <= n; p++) {
      if (n % p === 0) {
        // Якщо p - просте число, що ділить n, віднімаємо від результату result
        while (n % p === 0) {
          n /= p;
        }
        result -= result / p;
      }
    }

    // Якщо n є простим числом більше 1, віднімаємо від результату
    if (n > 1) {
      result -= result / n;
    }

    return result;
  }
  let N = parseInt(props.date.n);
  console.log()
  let mainResult = eulerPhi(N);;


  console.log(mainResult);
  return (
    <Card cssClass={style.result}>
      <h1>Результат</h1>
      <h2>{mainResult}</h2>
    </Card>
  );
};

export default ResultEyler;
