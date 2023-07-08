import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Transition, CSSTransition, SwitchTransition } from 'react-transition-group';

function App() {
  //const [loaderVisible, setLoaderVisible] = useState(false);
  const [mode, setMode] = useState("out-in");
  const [toggle, setToggle] = useState(false);

  const changeHandler = (e) => {
    setMode(e.target.value);
  }
  
  return (
    <div className="app">
      {/*<button onClick={() => setLoaderVisible(!loaderVisible)}>{loaderVisible ? "HIDE" : "SHOW"}</button>*/}
      <div className="wrap">
        {/*<Transition
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
        </Transition>*/}

        {/*<CSSTransition
          in={loaderVisible}
          timeout={500}
          classNames={{
            enterActive: 'circle-show',
            enterDone: 'circle-rotate',
            exitActive: 'circle-hide',
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className="circle" />
        </CSSTransition>*/}
      </div>

      <div>
          <label htmlFor='out-in'>out-in</label>
          <input onChange={(e) => changeHandler(e)}  id="out-in" value="out-in" name='radio' type='radio' />
          <label htmlFor='in-out'>in-out</label>
          <input onChange={(e) => changeHandler(e)} id="in-out" value="in-out" name='radio' type='radio' />
        </div>

        <SwitchTransition mode={mode}>
          <CSSTransition
            timeout={500}
            classNames="fade"
            key={toggle}
          >
            <button onClick={() => setToggle(!toggle)}>
            {toggle ? "Hello world" : "Goodbye world"}
            </button>
          </CSSTransition>
        </SwitchTransition>
    </div>
  );
}

export default App;
