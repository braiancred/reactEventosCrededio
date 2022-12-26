import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <div id="icono">
             <button>{test.caclItemsQty()}<AiOutlineShoppingCart /></button></div>
    );
}

export default CartWidget;