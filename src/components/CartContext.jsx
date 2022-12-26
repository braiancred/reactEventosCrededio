import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(data => data.id === item.id);
        if (found ) {
            const updatedCart = cartList.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, qty: prod.qty + qty }
                }
                return prod;
            })
            setCartList(updatedCart)
    } else {
       
        setCartList([...cartList, 
            {
            id: item.id,
            name: item.name,
            banner: item.banner,
            price: item.price,
            qty: qty 
        }
    ])
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteThis = (id) => {
        const nuevoArray = cartList.filter(item => item.id !== id);
        setCartList(nuevoArray);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem + cartList[index].qtyItem;
    }
        
    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcChargePrice = () => {
        return calcSubTotal() * 1.10;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteThis, removeList, calcTotalPerItem, calcSubTotal, calcChargePrice, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;