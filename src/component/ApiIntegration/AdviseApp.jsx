import { useState } from "react"
import "./advise.css"

export const AdviseApp = () => {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function getAdvice() {
    let adv = ''
    while(true) {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      adv = data.slip.advice
      console.log(adv)
      if (adv !== advice)
        break;
    }
    setCount((count) => count+1)
    setAdvice(adv)
    console.log(count+'   '+advice)
  }


  return (
    <div>
      <h2>{advice}</h2>
      <button disabled={loading} onClick={getAdvice}>Next</button>
      <h3>You have clicked {count} times</h3>
    </div>
  )
}
