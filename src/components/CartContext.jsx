import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(data => data.idItem === item.id);
        if (found === undefined ) {
        setCartList([
            ...cartList,
            {
                id: item.id,
                name: item.name,
                banner: item.banner,
                price: item.price,
                priceCharge: item.priceCharge,
                qty: qty
            }
        ])
    } else {
        found.qtyItem += qty;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteThis = (id) => {
        const nuevoArray = cartList.filter(item => item.id !== id);
        setCartList(nuevoArray);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteThis, removeList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;