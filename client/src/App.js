import React, {useState} from 'react';
import logo from './logo.svg';
import Testlink from './components/Testlink.jsx'
import Rangechart from './components/Rangechart.jsx'
import Dash from './components/Dash.jsx'
import axios from 'axios';
import './App.css';


function App() {

  const [displayActive, setDisplay] = useState(true);

  const setSelect = () => setDisplay(false);
  const setView = () => setDisplay(true);


  return (
    <div className="App">
      <div className="dash-container">
        <button onClick={setSelect} className='selecta'>Select</button>
        <button onClick={setView} className="selecta">Display</button>
      </div>
      <Rangechart displayActive={displayActive}/>
      <Dash displayActive={displayActive}/>
    </div>
  );
}

export default App;
