import {useState} from 'react';

export default function Contador () {
    const [count, setCount] = useState (0)

    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () =>{
        setCount(count - 1)
    }

    return (
        <div className="contador">
            <button onClick={sumar}>+</button>
            <h4>{count}</h4>
            <button onClick={restar}>-</button>
        </div>
    );
}
