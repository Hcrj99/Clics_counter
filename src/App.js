import './App.css';
import './styles/Button.css'
import './styles/Counter.css'
import Button from './Components/button';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'
import Counter from './Components/counter';

function App() {

  const makeclic = () => {
    console.log('Clic');
  }

  const resetcounter = () => {
    console.log('reset');
  }

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
        clicNumber={5}/>
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
