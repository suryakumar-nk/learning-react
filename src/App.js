import './App.css';
import Header from './component/basicConcepts/Header';
import { PropsSample } from './component/basicConcepts/PropsSample';
import { ArrayProps } from './component/basicConcepts/ArrayProps';
import { OneOfSample, FunctionAsProps } from './component/basicConcepts/OneOfSample';

function App() {

  const items = [
    { id: 1, name: 'surya' },
    { id: 2, name: 'Gowtham' },
    { id: 3, name: 'varun' }
  ]

  const handleClick = () => {
    alert("Yes you clicked")
  };

  return (
    <div>
      <Header />
      <PropsSample name='Surya' age={24} isMarried={false}/>
      <PropsSample />
      <ArrayProps items={items} /> 
      <OneOfSample color="orange" />
      <FunctionAsProps func={handleClick} />
    </div>
  );
}

export default App;
