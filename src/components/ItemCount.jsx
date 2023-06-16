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
            <div className="botonescontador">
                <h4 onClick={sumar}>+</h4>
            </div>
            <h4>{count}</h4>
            <div className="botonescontador">
                <h4 onClick={restar}>-</h4>
            </div>
        </div>
    );
}
