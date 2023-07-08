import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaderVisible(true), 1000);
    setTimeout(() => setLoaderVisible(false), 5000);
  }, [])
  return (
    <div className="app">
      <button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "HIDE" : "SHOW"}</button>
      <div className="wrap">
        <Transition
          in={loaderVisible}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          { state => <div className={`circle ${state}`} /> }
        </Transition>
      
      </div>
    </div>
  );
}

export default App;
