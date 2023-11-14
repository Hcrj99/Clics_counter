import './App.css';
import freeCodeCamplogo from './assets/img/freecodecamp-logo.png'

function App() {
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
        
      </section>
    </div>
  );
}

export default App;
