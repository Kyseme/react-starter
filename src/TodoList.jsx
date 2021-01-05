import React, {useState, useContext, useEffect} from 'react';
import { TodoContext } from './App.jsx';

export function TodoList(props) {
    const {list, handleChecked} = props;
    const value = useContext(TodoContext);

    console.log('render', value);

    useEffect(() => {
        console.log('list change!');
    }, [list.length]);
    

    return (
        <div>
            {list.length > 0 && (
                <ul>
                 {list.map(it => {
                    return (
                        <li key={it.id} className="list-item">
                            <label>
                                <input type="checkbox" value={it.complete} onChange={() => handleChecked(it.id)}/>
                                <span className={it.complete ? 'complete' : ''}>{it.value}</span>
                            </label>
                        </li>)
                }) } 
            </ul>)}
        </div>
    )
}