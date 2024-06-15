import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export const Currency = () => {

  const[amount, setAmount] = useState(1);
  const[from, setFrom] = useState("USD");
  const[to, setTo] = useState("INR");
  const[result, setResult] = useState(1);

  useEffect(() => {
    const getExchangeRates = async () => {
        try {
            const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
            console.log(response)
            setResult(response.data.rates[to]);
        } catch (error) {
            console.log("Error in fetching details ", error);
        }
    }
    getExchangeRates();
  });

  const handleAmount = (e) => {
    if (e.target.value > 0) {
        setAmount(e.target.value)
    }
  };

  return (
    <>
        <div className="container">
            <div className="box">
                <img src="currency.png" alt="currency" />
            </div>
            <div className="header">Currency convertor</div>
            <div className="input-container">
                <label>Amount:</label>
                <input type="number" onChange={handleAmount} value={amount}/>
            </div>
            <div className="input-container">
                <label htmlFor="from">From:</label>
                <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
                    <option value="ARS">Argentina - ARS</option>
                    <option value="AUD">Australia - AUD</option>
                    <option value="BDT">Bangladesh - BDT</option>
                    <option value="BRL">Brazil - BRL</option>
                    <option value="CAD">Canada - CAD</option>
                    <option value="CLP">Chile - CLP</option>
                    <option value="CNY">China - CNY</option>
                    <option value="COP">Colombia - COP</option>
                    <option value="DKK">Denmark - DKK</option>
                    <option value="EUR">Eurozone countries - EUR</option>
                    <option value="EGP">Egypt - EGP</option>
                    <option value="ILS">Israel - ILS</option>
                    <option value="INR">India - INR</option>
                    <option value="IDR">Indonesia - IDR</option>
                    <option value="JPY">Japan - JPY</option>
                    <option value="KRW">South Korea - KRW</option>
                    <option value="KES">Kenya - KES</option>
                    <option value="MXN">Mexico - MXN</option>
                    <option value="MYR">Malaysia - MYR</option>
                    <option value="NGN">Nigeria - NGN</option>
                    <option value="NOK">Norway - NOK</option>
                    <option value="NZD">New Zealand - NZD</option>
                    <option value="PKR">Pakistan - PKR</option>
                    <option value="PEN">Peru - PEN</option>
                    <option value="PHP">Philippines - PHP</option>
                    <option value="QAR">Qatar - QAR</option>
                    <option value="RUB">Russia - RUB</option>
                    <option value="SAR">Saudi Arabia - SAR</option>
                    <option value="SGD">Singapore - SGD</option>
                    <option value="ZAR">South Africa - ZAR</option>
                    <option value="KRW">South Korea - KRW</option>
                    <option value="SEK">Sweden - SEK</option>
                    <option value="CHF">Switzerland - CHF</option>
                    <option value="THB">Thailand - THB</option>
                    <option value="TRY">Turkey - TRY</option>
                    <option value="AED">United Arab Emirates - AED</option>
                    <option value="GBP">United Kingdom - GBP</option>
                    <option value="USD">United States - USD</option>
                    <option value="VES">Venezuela - VES</option>
                    <option value="VND">Vietnam - VND</option>
                    <option value="HKD">Hong Kong - HKD</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="to">To:</label>
                <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="ARS">Argentina - ARS</option>
                    <option value="AUD">Australia - AUD</option>
                    <option value="BDT">Bangladesh - BDT</option>
                    <option value="BRL">Brazil - BRL</option>
                    <option value="CAD">Canada - CAD</option>
                    <option value="CLP">Chile - CLP</option>
                    <option value="CNY">China - CNY</option>
                    <option value="COP">Colombia - COP</option>
                    <option value="DKK">Denmark - DKK</option>
                    <option value="EUR">Eurozone countries - EUR</option>
                    <option value="EGP">Egypt - EGP</option>
                    <option value="ILS">Israel - ILS</option>
                    <option value="INR">India - INR</option>
                    <option value="IDR">Indonesia - IDR</option>
                    <option value="JPY">Japan - JPY</option>
                    <option value="KRW">South Korea - KRW</option>
                    <option value="KES">Kenya - KES</option>
                    <option value="MXN">Mexico - MXN</option>
                    <option value="MYR">Malaysia - MYR</option>
                    <option value="NGN">Nigeria - NGN</option>
                    <option value="NOK">Norway - NOK</option>
                    <option value="NZD">New Zealand - NZD</option>
                    <option value="PKR">Pakistan - PKR</option>
                    <option value="PEN">Peru - PEN</option>
                    <option value="PHP">Philippines - PHP</option>
                    <option value="QAR">Qatar - QAR</option>
                    <option value="RUB">Russia - RUB</option>
                    <option value="SAR">Saudi Arabia - SAR</option>
                    <option value="SGD">Singapore - SGD</option>
                    <option value="ZAR">South Africa - ZAR</option>
                    <option value="KRW">South Korea - KRW</option>
                    <option value="SEK">Sweden - SEK</option>
                    <option value="CHF">Switzerland - CHF</option>
                    <option value="THB">Thailand - THB</option>
                    <option value="TRY">Turkey - TRY</option>
                    <option value="AED">United Arab Emirates - AED</option>
                    <option value="GBP">United Kingdom - GBP</option>
                    <option value="USD">United States - USD</option>
                    <option value="VES">Venezuela - VES</option>
                    <option value="VND">Vietnam - VND</option>
                    <option value="HKD">Hong Kong - HKD</option>
                </select>
            </div>
            <div className="result">
                <p>{amount} {from} is equal to {(result*amount).toFixed(2)} {to}</p>
            </div>
        </div>
    </>
  )
}
