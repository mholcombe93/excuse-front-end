import './App.css';
import Excuse from './components/Excuse.jsx';

function App() {
  return (
    <div className="App">
      <div className='Header'>
      <h1> Need and excuse to get out of an event? </h1>
        <h2> Click the button below that aligns with your event to find the best excuse you need!</h2>
        </div>
      <div className = "Excuse-Container">
      <Excuse />
      </div>
    </div>
  );
}

export default App;
