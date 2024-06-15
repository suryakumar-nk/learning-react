import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { Card } from './component/card/Card';
// import { QrCode } from './component/QRcode/QrCode'
import reportWebVitals from './reportWebVitals';
// import { ObjectSample } from './component/basicConcepts/ObjectSample';
// import { UserDetail } from './component/UseStateSample/UserDetail';
// import { AdviseApp } from './component/ApiIntegration/AdviseApp';
// import { WeatherApp } from './component/weatherApp/WeatherApp';
// import { BMIcalculator } from './component/BMIcalculator/BMIcalculator';
import { Currency } from './component/CurrencyConvertor/Currency';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
      <App /> 
      <Card />
      <QrCode />
      <ObjectSample />
      <UserDetail />
      <AdviseApp />
      <WeatherApp />
      <BMIcalculator />
    */}
    <Currency />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
