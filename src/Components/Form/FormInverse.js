import Button from "../Button/Button";
import Card from "../UI/Card";
import style from "./Form.module.css";
import { useState } from "react";

const FormInverse = (props) => {
  const [valueA, setValueA] = useState("");
  const [valueP, setValueP] = useState("");



  const changeValueAHandler = (event) => {
    setValueA(event.target.value);
  };

  const changeValuePHandler = (event) => {
    setValueP(event.target.value);
  };

  const submitHandler = (event) => {
   
    event.preventDefault();
    console.log("2")
      const inputObject = {
        valueP: valueP,
        valueA:valueA
      };
      console.log(inputObject);
      props.saveInverseDate(inputObject);
  };

  return (
    <Card cssClass={style.input}>
      <form onSubmit={submitHandler}>
        <label>p (модуль групи)</label>
        <input onChange={changeValueAHandler} value={valueA} type="number" />
        <label>a (число)</label>
        <input onChange={changeValuePHandler} value={valueP} type="number" />
        <Button type="submit" onClick ={submitHandler}>
        Обчислити
        </Button>
      </form>
    </Card>
  );
};

export default FormInverse;
