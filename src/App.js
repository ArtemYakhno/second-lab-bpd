import "./App.css";
import Form from "./Components/Form/Form";
import Result from "./Components/Result/Result";
import Header from "./Components/Header/Header";
import FormEkvlid from "./Components/Form/FormEkvlid";
import ResultEkvlid from "./Components/Result/ResultEkvlid";
import { useState } from "react";
import FormInverse from "./Components/Form/FormInverse";
import ResultInverse from "./Components/Result/ResultInverse";

function App() {
  const [dataFromForm, setDataFromForm] = useState({});
  const [dataFromFormEkvlid, setDataFromFormEkvlid] = useState({});
  const [dataFromFormInverse, setDataFromFormInverse] = useState({});
  
  const saveFormDate = (inputData) => {
    setDataFromFormEkvlid({});
    setDataFromFormInverse({});
    setDataFromForm(inputData);
  };
  const saveFormEkvlidDate = (inputData) => {
    setDataFromFormInverse({});
    setDataFromForm({})
    setDataFromFormEkvlid(inputData);
  };
  const saveFormInverseDate = (inputData) => {
    setDataFromFormEkvlid({});
    setDataFromForm({})
    setDataFromFormInverse(inputData);
  };
  return (
    <div className="App">
      <div>
        <Header text="Калькулятор класів залишків" />
        <Form saveDate={saveFormDate} />
        {Object.keys(dataFromForm).length === 0 ? null : <Result date={dataFromForm} />}
      </div>
      <div>
        <Header text="Алгоритм Евкліда" />
        <FormEkvlid saveEkvlidDate={saveFormEkvlidDate} />
        {Object.keys(dataFromFormEkvlid).length === 0 ? null : <ResultEkvlid date={dataFromFormEkvlid}/> }
      </div>
      <div>
        <Header text="Калькулятор знаходження зворотного елемента a^-1 в G(p,*)" />
        <FormInverse saveInverseDate={saveFormInverseDate} /> 
        {Object.keys(dataFromFormInverse).length === 0 ? null :  <ResultInverse date={dataFromFormInverse}/>  }
       
      </div>
    </div>
  );
}

export default App;
