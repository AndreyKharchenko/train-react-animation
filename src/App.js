import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "HIDE" : "SHOW"}</button>
      <div className="wrap">
        { loaderVisible && <div className="circle" /> }
      </div>
    </div>
  );
}

export default App;
