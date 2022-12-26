import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../App.css";

const Cart = () => {

    const { cartList, deleteThis, removeList } = useContext(CartContext);

    return (
        <>
            <div>
                <h1>Tus entradas:</h1>
                <ul>
                    {
                        cartList.length === 0
                        ? <div>
                            <p>No tienes entradas en el carrito</p><button><Link to='/' type="button" class="btn btn-secondary">Ir a comprar</Link></button>
                            </div>
                        : cartList.map(item => <li key={item.id}>{item.name} cantidad:{item.qty}<button onClick={() => deleteThis(item.id)} type="button" class="btn btn-secondary">Eliminar</button></li>)
                    }
                </ul>
            </div>
            <div>
                {
                    (cartList.length > 1)
                    ? <button onClick={removeList} type="button" class="btn btn-secondary">Eliminar todo</button> 
                    : <p></p>
                }
            </div>
            <div>
                {
                    (cartList.length > 0)
                    ? <button><Link to='/' type="button" class="btn btn-secondary">Seguir Comprando</Link></button>
                    : <p></p>
                }
            </div>
        </>
    );
}

export default Cart;