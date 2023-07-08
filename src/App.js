import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([{ id: 1, text: "Пункт 1" }, { id: 2, text: "Пункт 2" }, { id: 3, text: "Пункт 3" }])
  return (
    <div className="app">
      <div>
        <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
        <button onClick={() => setTodoList([...todoList, { id: todoList.length + 1, text: text }])}>Добавить</button>
      </div>

      <TransitionGroup component='ul'>
        {
          todoList.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="todo"
            >
              <li className='todo' onClick={() => setTodoList([...todoList.filter(it => it.id != id)])}>{id} {text}</li>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    </div>
  );
}

export default App;
