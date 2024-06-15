import { useState } from 'react';
import './style.css';

export const BMIcalculator = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [wrongValues, setWrongValues] = useState(false);
  const [result, setResult] = useState("");

  const calculate = () => {
    if (height === "" || weight === "") {
      setWrongValues(true)
      return;
    }
    const bmiValue = (weight * 10000)/(height*height);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setResult("Under Weight");
    } else if (bmiValue >=18.5 && bmiValue < 25) {
      setResult("Normal weight")
    } else if (bmiValue >=25 && bmiValue < 30) {
      setResult("Over weight")
    } else {
      setResult("Obise")
    }
    setWrongValues(false)
  };

  function clear () {
    setHeight("");
    setWeight("");
    setBmi(null);
    setWrongValues(false);
    setResult("")
  };

  function handleHeightChange(event) {
    const value = event.target.value;
    if (Number(value) || value === '') {
      setHeight(value)
    }
  };

  function handleWeightChange(event) {
    const value = event.target.value;
    if (Number(value) || value === '') {
      setWeight(value)
    }
  };

  return (
    <>
      <div className="container">
        <div className="image">
          <img src="bmi.jpg" alt="bmi" />
        </div>
        <div className="input-container">
          <h3>BMI Calcuator</h3>
          {wrongValues && <h5 style={{margin: "0px"}}>Value should not be empty</h5>}
          <p style={{marginBottom: "5px"}}>Height:</p>
          <input type='text' placeholder='Enter height in cm' value={height} onChange={handleHeightChange}/>
          <p style={{marginBottom: "5px"}}>Weight:</p>
          <input type='text' placeholder='Enter weight in kg' value={weight} onChange={(e) => handleWeightChange(e)} />
          <div className="button">
            <button onClick={calculate}>Calcuate</button>
            <button onClick={clear}>Clear</button>
          </div>
          {bmi != null ?
            <div className="result">
              <h3>You BMI is: {bmi}</h3>
              <p>Status: {result}</p>
            </div> : <></>
          }
        </div>
      </div>
    </>
  )
}
