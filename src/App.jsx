
import React, {useState} from 'react'
import {AddTodo} from './AddTodo.jsx';
import {TodoList} from './TodoList.jsx';
import './todo.css';

export const TodoContext = React.createContext();

export default function App() {
    const [list, setList] = useState([])
    const onAdd = (val) => {
        setList(preList => { // complete     id  value
            preList.unshift({
                complete: false,
                id: Math.random().toString(),
                value: val
            });
            return [...preList];
        });
    };

    const handleChecked = (id) => {
        const idx = list.findIndex(it => it.id === id);
        setList(preList => [...preList.slice(0, idx), {...preList[idx], complete: !preList[idx].complete}, ...preList.slice(idx + 1)]);
    }

    const [count, setCount] = useState(0);

    function handleAlertClick() {
      setTimeout(() => {
        alert('You clicked on: ' + count);
      }, 3000);
    }
    return (
        // <TodoContext.Provider value={
        //     {
        //         list,
        //         setList
        //     }
        // }>
        //     <>
        //         <AddTodo onAdd={onAdd}/>
        //         <TodoList list={list} handleChecked={handleChecked}/>
        //     </>
        // </TodoContext.Provider>

        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button onClick={handleAlertClick}>
          Show alert
        </button>
      </div>
    )
}