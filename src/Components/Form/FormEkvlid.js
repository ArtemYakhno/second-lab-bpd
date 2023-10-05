import Button from "../Button/Button";
import Card from "../UI/Card";
import style from "./Form.module.css";
import { useState } from "react";

const FormEkvlid = (props) => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");



  const changeValueAHandler = (event) => {
    setValueA(event.target.value);
  };

  const changeValueBHandler = (event) => {
    setValueB(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
      const inputObject = {
        valueA: valueA,
        valueB:valueB
      };
      props.saveEkvlidDate(inputObject);
  };

  return (
    <Card cssClass={style.input}>
      <form onSubmit={submitHandler}>
        <label>Число a</label>
        <input onChange={changeValueAHandler} value={valueA} type="number" />
        <label>Число b</label>
        <input onChange={changeValueBHandler} value={valueB} type="number" />
        <Button type="submit" onClick ={submitHandler}>
        Знайти загальний дільник
        </Button>
      </form>
    </Card>
  );
};

export default FormEkvlid;
