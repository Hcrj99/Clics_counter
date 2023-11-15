import './App.css';
import Button from './Components/button';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'
import Counter from './Components/counter';
import { useState } from 'react';

function App() {

  const [numClics, setNumclics] = useState(0);

  const makeclic = () => {
    setNumclics(numClics+1);
  };

  const resetcounter = () => {
    setNumclics(0);
  };

  return (
    <div className='App'>
      <div className='Logo__container'>
        <img 
        className='Logo__container-logo'
        src={freeCodeCamplogo}
        alt='Logo'
        />
      </div>
      <section className='Counter__container'>
        <Counter
        clicNumber={numClics}/>
        <Button
        text='Clic'
        isbuttonclic={true}
        makeclic={makeclic}/>
        <Button
        text='Reset'
        isbuttonclic={false}
        makeclic={resetcounter}/>
      </section>
    </div>
  );
}

export default App;
