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
                        ? <p>No tienes entradas en el carrito</p>
                        : cartList.map(item => <li key={item.id}>{item.name} cantidad:{item.qty} <img src={item.banner} alt ="banner del evento"/> <button onClick={() => deleteThis(item.id)} type="button" class="btn btn-secondary">Eliminar</button></li>)
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
        </>
    );
}

export default Cart;