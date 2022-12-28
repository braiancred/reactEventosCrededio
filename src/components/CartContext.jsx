import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(data => data.id === item.idItem);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.idItem,
                    bannerItem: item.banner,
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartList(result);
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
        return calcSubTotal() * 0.10;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, removeList, calcTotalPerItem, calcSubTotal, calcChargePrice, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;