import Card from "../UI/Card";
import style from "./Result.module.css";


const Result = (props) => {
  let finalyResult = "Виконайте обрахунок";
  const add = (valueA, valueB, module) => {
    let result = (valueA+valueB)%module
    return result
  };

  const inverse = (valueA, module) => {
    let result = (-valueA+ module)%module
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
  const division = (valueA, valueB, module)=>{
    let result = valueA * (modInverse(valueB,module)) % module;
    return result;
  }

  function modInverse(value, m) {
    const [gcd, x, y] = extendedGCD(value, m);
  
    if (gcd !== 1) {
      
      finalyResult = "Обернене число не існує";     
    }
    return (x % m + m) % m;
  }
  
  function extendedGCD(value, b) {
    if (value === 0) {
      return [b, 0, 1];
    }
  
    const [gcd, x1, y1] = extendedGCD(b % value, value);
    const x = y1 - Math.floor(b / value) * x1;
    const y = x1;
  
    return [gcd, x, y];
  }
  function isPrimeFermat(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;


    const maxTests = 50;
    for (let i = 0; i < maxTests; i++) {
      const a = Math.floor(Math.random() * (n - 2)) + 2;
      if (modularExponentiation(a, n - 1, n) !== 1) return false;
    }
    return true;
  }


  function modularExponentiation(a, b, m) {
    if (b === 0) return 1;
    let result = 1;
    a = a % m;
    while (b > 0) {
      if (b % 2 === 1) {
        result = (result * a) % m;
      }
      b = Math.floor(b / 2);
      a = (a * a) % m;
    }
    return result;
  }
  function generateRandomPrime(A) {
    while (true) {
      const p = Math.floor(Math.random() * A) + 1;
      if (isPrimeFermat(p)) return p;
    }
  }

  const currentFunction = props.date.buttonName;
  let A = parseInt(props.date.valueA);
  let M = parseInt(props.date.module);
  let N = parseInt(props.date.N)
  let P = parseInt(props.date.P)


  if (currentFunction === "add") {finalyResult = add(A, parseInt(props.date.valueB), M)};
  if (currentFunction === "inverse") {finalyResult = inverse(A, M)};
  if (currentFunction === "subtract") {finalyResult = subtract(A, parseInt(props.date.valueB), M)};
  if (currentFunction === "multiply") {finalyResult = multiply(A, parseInt(props.date.valueB), M)};
  if (currentFunction === "power") {finalyResult = power(A, parseInt(props.date.valueB), M)};
  if(currentFunction ==="division"){finalyResult = division(A, parseInt(props.date.valueB), M)};
  if(currentFunction==="mod_inversion"){finalyResult = modInverse(A, M)};
  if(currentFunction==="isPrimeInput"){finalyResult= isPrimeFermat(N) ? "просте" : "не просте";}
  if(currentFunction==="generatePrime"){finalyResult=generateRandomPrime(P)}
  console.log("result")
  return (
    <Card cssClass={style.result}>
      <h1>Результат</h1>
      <h2>{finalyResult}</h2>
    </Card>
  );
};

export default Result;
