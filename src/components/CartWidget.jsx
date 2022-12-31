import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { calcItemsQty } = useContext(CartContext);

    return (
        <AiOutlineShoppingCart><Link to="/cart" className="nav-link">{calcItemsQty()}</Link></AiOutlineShoppingCart>
    );
}

export default CartWidget;