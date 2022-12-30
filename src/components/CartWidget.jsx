import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { caclItemsQty } = useContext(CartContext);

    return (
        <div id="icono">
             <button>{caclItemsQty()}<AiOutlineShoppingCart /></button></div>
    );
}

export default CartWidget;