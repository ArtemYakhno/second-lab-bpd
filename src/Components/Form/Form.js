import Button from "../Button/Button";
import Card from "../UI/Card";
import style from "./Form.module.css";
import { useState } from "react";

const Form = (props) => {
  const [module, setModule] = useState("");
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueSimple, setValueSimple] = useState("");
  const [generatedSimpleValue, setGeneratedSimpleValue] = useState("");

  const reset = () => {
    setModule("");
    setValueB("");
    setValueA("");
    setValueSimple("");
    setGeneratedSimpleValue("");
  };

  const changeModuleHandler = (event) => {
    setModule(event.target.value);
  };

  const changeValueAHandler = (event) => {
    setValueA(event.target.value);
  };

  const changeValueBHandler = (event) => {
    setValueB(event.target.value);
  };
  const changeValueSimpleHandler = (event) => {
    setValueSimple(event.target.value);
  };
  const changeGeneratedSimpleValueHandler = (event) => {
    setGeneratedSimpleValue(event.target.value);
  };

  const submitHandler = (event, buttonName) => {
    event.preventDefault();

    const inputObject = {
      buttonName: buttonName, // Використовуємо передане ім'я кнопки
      valueA: valueA,
      valueB: valueB,
      module: module,
      N: valueSimple,
      P: generatedSimpleValue,
    };

    props.saveDate(inputObject);
  };

  return (
    <Card cssClass={style.input}>
      <form onSubmit={submitHandler}>
        <label>Модуль класів залишків (m):</label>
        <input onChange={changeModuleHandler} value={module} type="number" />
        <label>Число a</label>
        <input onChange={changeValueAHandler} value={valueA} type="number" />
        <label>Число b</label>
        <input onChange={changeValueBHandler} value={valueB} type="number" />
        <Button type="submit" onClick={(event) => submitHandler(event, "add")}>
          a+b
        </Button>
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "inverse")}
        >
          -a
        </Button>
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "division")}
        >
          a/b
        </Button>
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "subtract")}
        >
          a-b
        </Button>
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "multiply")}
        >
          a*b
        </Button>
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "power")}
        >
          a ^ b
        </Button>
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "mod_inversion")}
        >
          a^(-1)
        </Button>

        <Button onClick={reset}>Очистити</Button>
        <label>Перевірка простоти числа</label>
        <input
          onChange={changeValueSimpleHandler}
          value={valueSimple}
          type="number"
        />
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "isPrimeInput")}
        >
          Перевірити
        </Button>
        <label>Генерація простого числа p </label>
        <input
          onChange={changeGeneratedSimpleValueHandler}
          value={generatedSimpleValue}
          type="number"
        />
        <Button
          type="submit"
          onClick={(event) => submitHandler(event, "generatePrime")}
        >
          Згенерувати
        </Button>
      </form>
    </Card>
  );
};

export default Form;
