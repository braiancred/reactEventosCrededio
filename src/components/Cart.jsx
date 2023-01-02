import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../App.css";
import { doc, collection, increment, updateDoc, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Cart = () => {
    const { calcTotal, cartList, removeList, deleteItem, calcTotalPerItem, calcSubTotal, calcChargePrice } = useContext(CartContext);
    
    
   
    const createOrder = () => {
        let order = {
            buyer: {
                name: "Braian Crededio",
                email: "braiancred@gmail.com",
                phone: "534537457"
            },
            date: serverTimestamp(),
            items: cartList,
            total: calcTotal()
        };
        const newOrderRef = collection(db, "orders")
          addDoc(newOrderRef, order)
            .then(result => {
                alert("Felicitaciones, has realizado la compra! El código de tu compra es " + result.id)
                cartList.forEach( async(item) => {
                    const itemRef = doc(db, "eventos", item.idItem);
                    await updateDoc(itemRef, {
                        stock: increment(-item.qtyItem)
                    });
                })
                removeList()
            })
            .catch(err => console.log(err))
    }



    return (
        <>
            <div className="contenedorIzqDer">
                <div className="parteIzqCarrito">
                    <h1>Tus entradas:</h1>
                    <div className="cardTicket">
                        <ul>
                            {
                                cartList.length === 0
                                ? <><p>No tienes entradas en el carrito</p><button><Link to='/' type="button" class="btn btn-secondary">Ir a comprar</Link></button></>
                                : cartList.map(item => <li key={item.idItem}>
                                    <div className="imgCard"><img width="25%" src={item.bannerItem} alt="banner del evento"/></div>
                                    <div className="textCard">
                                        Evento: {item.nameItem} Cantidad de tickets: {item.qtyItem} Valor por ticket: ${item.priceItem} Sub-total por cantidad de ticket: ${calcTotalPerItem(item.idItem)} 
                                        <hr />
                                        <button onClick={() => deleteItem(item.idItem)} type="button" class="btn btn-secondary">Eliminar</button>
                                    </div>
                                <hr />
                                </li>)
                            }
                        </ul>
                    </div>
                    <div>
                    {
                        (cartList.length > 1)
                        && <button onClick={removeList} type="button" class="btn btn-secondary">Eliminar todo</button> 
                        
                    }
                    </div>
                </div>
                { cartList.length > 0 &&
                <div className="parteDerCarrito">
                    <h1>Tu compra:</h1>
                    <hr />
                    <div>Sub-total de compra: ${calcSubTotal()}</div>
                    <hr />
                    <div>Cargo por Servicio: $ {calcChargePrice()}</div>
                    <hr />
                    <div>Total: ${calcTotal()}</div>
                    <hr />
                    <button onClick={createOrder} type="button" class="btn btn-secondary">Comprar ahora!</button>
                    <hr />
                <div>
                    {
                        (cartList.length > 0)
                        && <button><Link to='/' type="button" class="btn btn-secondary">Seguir Comprando</Link></button> 
                    }
                </div>
                </div>}
            </div>
        </>
    );
}

export default Cart;