import Title from './components/title/title';
import './App.css';
import Rectangle from './components/rectangle/rectangle';
import Inputs from './components/inputs/inputs';

function App() {

  return (

      <div className='box'>
        <Title/>
        <div className='info'>
        <Rectangle/>
        <Inputs />
        </div>
      </div>

  )
}

export default App;
