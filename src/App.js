import './App.css';
import Button from './Components/button';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'

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
