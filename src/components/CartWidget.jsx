import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { CartContext } from './CartContext';

const CartWidget = () => {
    const { calcItemsQty } = useContext(CartContext);

    return (
        <AiOutlineShoppingCart>{calcItemsQty()}</AiOutlineShoppingCart>
    );
}

export default CartWidget;