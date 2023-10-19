import Button from "../Button/Button";
import Card from "../UI/Card";
import style from "./Form.module.css";
import { useState } from "react";

const FormEkvil = (props) => {
  const [valueA, setValueA] = useState("");


  const changeValueAHandler = (event) => {
    setValueA(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
      const inputObject = {
        n: valueA,
      };
      props.saveFormEkvilDate(inputObject);
  };

  return (
    <Card cssClass={style.input}>
      <form onSubmit={submitHandler}>
        <label>Число n</label>
        <input onChange={changeValueAHandler} value={valueA} type="number" />
        <Button type="submit" onClick ={submitHandler}>
        Знайти загальний дільник
        </Button>
      </form>
    </Card>
  );
};

export default FormEkvil;
