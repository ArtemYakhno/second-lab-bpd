import './App.css';
import Form from './Components/Form/Form';
import Result from './Components/Result/Result'
import Header from './Components/Header/Header';
import { useState } from 'react';
function App() {
  const [dataFromForm, setDataFromForm]=useState(null)
  const saveFormDate = (inputData)=>{
    setDataFromForm(inputData)
  }
  return (
    <div className="App">
      <Header/>
      <Form saveDate={saveFormDate}/>
      {dataFromForm!==null? <Result date={dataFromForm}/>  : null}
    </div>
  );
}

export default App;
