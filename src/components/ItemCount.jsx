import { useEffect, useState } from 'react';
import "../App.css";

const ItemCount = ({ stock = 10, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div className="botonera">
                <button type="button" class="btn btn-secondary" onClick={decrement}>   -   </button>
                <div>{count}</div>
                <button type="button" class="btn btn-secondary" onClick={increment}>   +   </button>
                <hr />
                {
                    stock && count
                    ? <button type="button" class="btn btn-secondary" onClick={() => onAdd(count)}>Agregar al carrito</button>
                    : <button type="button" class="btn btn-secondary" disabled>Agregar al carrito</button>
                }
            </div>
        </>
    );
}

export default ItemCount;