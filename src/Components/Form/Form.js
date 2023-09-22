import Button from "../Button/Button";
import Card from "../UI/Card";
import style from "./Form.module.css";
import Error from "../Error/Error";
import { useState } from "react";

const Form = (props) => {
  const [module, setModule] = useState("");
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [isErrorOcureted, setIsErrorOcureted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = () => {
    setModule("");
    setValueB("");
    setValueA("");
  };

  const changeModuleHandler = (event) => {
    setIsErrorOcureted(false);
    setModule(event.target.value);
  };

  const changeValueAHandler = (event) => {
    setIsErrorOcureted(false);
    setValueA(event.target.value);
  };

  const changeValueBHandler = (event) => {
    setIsErrorOcureted(false);
    setValueB(event.target.value);
  };

  const empthyValues = () => {
    setErrorMessage("Всі значення повинні бути заповненні!");
    setIsErrorOcureted(true);
  };

  const submitHandler = (event, buttonName) => {
    event.preventDefault();

    if (valueA === "" || valueB === "" || module === "") {
      empthyValues();
    } else {
      const inputObject = {
        buttonName: buttonName, // Використовуємо передане ім'я кнопки
        valueA: valueA,
        valueB: valueB,
        module: module,
      };
      console.log(inputObject);
      props.saveDate(inputObject);
    }
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
          a+b mod m
        </Button>
        <Button type="submit" onClick={(event) => submitHandler(event, "inverse")}>
          -a mod m
        </Button>
        <Button type="submit" onClick={(event) => submitHandler(event, "subtract")}>
          a-b mod m
        </Button>
        <Button type="submit" onClick={(event) => submitHandler(event, "multiply")}>
          a*b mod m
        </Button>
        <Button type="submit" onClick={(event) => submitHandler(event, "power")}>
          a ^ b mod m
        </Button>
        <Button onClick={reset}>Очистити</Button>
      </form>
      {isErrorOcureted ? <Error errorMessage={errorMessage} /> : null}
    </Card>
  );
};

export default Form;
