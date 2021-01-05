import React, {useState, useCallback, useEffect} from 'react';
import {usePrevious} from './demo.jsx';

export function AddTodo (props) {
    const [str, setStr] = useState(''); 
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

   

    useEffect(() => {
        console.log('counter', count, 'before', prevCount);
    });

    const handleChange = useCallback((event) => {
        setStr(event.target.value)
        console.log('current str', str);
        console.log('actual str', event.target.value);
    }, [str]);

    const handleAdd = useCallback(() => {
        str && props.onAdd(str);
        setStr('');
    }, [str, props.onAdd, setStr]);

    const handleKeyUp = useCallback((event) => {
        if (event.nativeEvent.keyCode === 13) {
            handleAdd();
        }
    }, [handleAdd]);

    const addCount = () => {
        setCount(count+1);
    }

    return (
        <div>
            <input type="text" value={str} onChange={handleChange} onKeyUp={handleKeyUp}/>
            <button onClick={handleAdd}>添加</button>
            <button onClick={() => setCount(count+1)}>Test</button>
        </div>
    )
}

