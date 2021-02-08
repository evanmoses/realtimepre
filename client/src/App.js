import logo from './logo.svg';
import Testlink from './components/Testlink.jsx'
import Rangechart from './components/Rangechart.jsx'
import Dash from './components/Dash.jsx'
import axios from 'axios';
import './App.css';


function App() {

  return (
    <div className="App">
        <Rangechart />
        <Dash />
    </div>
  );
}

export default App;
