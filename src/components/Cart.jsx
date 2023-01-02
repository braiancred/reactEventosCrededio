import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "../App.css";
import { doc, collection, increment, updateDoc, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import swal from "sweetalert";

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
                swal({
                    title: "Felicitaciones, has realizado la compra!", 
                    text: "El código de tu compra es " + result.id,
                    icon: "success",
                    button: "Aceptar"})
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
        <div>
            <div className="contenedorIzqDer">
                <div className="parteIzqCarrito">
                        <div className="detalleCard">
                            <ul>
                                {
                                    cartList.length === 0
                                    ? <>
                                    <p>No tienes entradas en el carrito</p><button><Link to='/' type="button" class="btn btn-secondary">Ir a comprar</Link></button>
                                    </>
                                    : cartList.map(item => <li key={item.idItem}>
                                        <h1>Tus entradas:</h1>
                                        <div className="cardSeparador">
                                            <img className="imgCard" width="30%" src={item.bannerItem} alt="banner del evento"/>
                                            <div>
                                                Evento:<p className="respuesta">{item.nameItem}</p>
                                                <hr /> 
                                                Cantidad de tickets:<p className="respuesta">{item.qtyItem}</p>
                                                <hr />
                                                Valor por ticket:<div><p className="respuesta">${item.priceItem}</p></div>
                                                <hr />
                                                Sub-total por cantidad de ticket:<div><p className="respuesta">${calcTotalPerItem(item.idItem)}</p></div>
                                                <hr />
                                                <button onClick={() => deleteItem(item.idItem)} type="button" class="btn btn-secondary">Eliminar</button>
                                            </div>
                                        </div>
                                    <hr />
                                    </li>)
                                }
                            </ul>
                        </div>
                </div>
                { cartList.length > 0 &&
                <div className="parteDerCarrito">
                    <h1>Tu compra:</h1>
                    <hr />
                    <div>Sub-total de compra:<p className="respuesta">${calcSubTotal()}</p></div>
                    <hr />
                    <div>Cargo por Servicio:<p className="respuesta">${calcChargePrice()}</p></div>
                    <hr />
                    <div>Total:<p className="respuesta">${calcTotal()}</p></div>
                    <hr />
                    <button onClick={createOrder} type="button" class="btn btn-secondary">Comprar ahora!</button>
                    <hr />
                <div>
                {
                    (cartList.length > 1)
                    && <button onClick={removeList} type="button" class="btn btn-secondary">Eliminar todo</button>                       
                }
                <hr />
                </div>
                <div>
                    {
                        (cartList.length > 0)
                        && <button><Link to='/' type="button" class="btn btn-secondary">Seguir Comprando</Link></button> 
                    }
                </div>
                </div>}
            </div>
        </div>
    );
}

export default Cart;