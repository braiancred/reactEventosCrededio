import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../App.css";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " entradas.");
        setItemCount(qty);
        addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.banner
            ? 
                <div className="cardDetalle">
                    <div className="cardImagen">
                        <img className="imagenDetalle" src={item.banner} alt="banner del evento"></img>
                    </div>
                    <div className="cardTexto">
                        <div className="divTexto">
                            <div><h2 className="contenedorTitulo">{item.name}</h2></div>
                            <div><p className="pregunta">¿Qué estilo?</p><p className="respuesta">{item.style}</p></div>
                            <div><p className="pregunta">¿Dónde?</p><p className="respuesta">{item.location}</p></div>
                            <div><p className="pregunta">¿Cuándo?</p><p className="respuesta">{item.date}</p></div>
                            <div><p className="pregunta">Valor Ticket:</p><p className="respuesta">${item.price}</p></div>
                            <hr></hr>
                            <div><h1>Comprar ticket/s:</h1>
                                {
                                itemCount === 0
                                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                : <Link to='/cart' style={{textDecoration: "none"}}><button type="button" class="btn btn-secondary">Ver Carrito</button></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            : <p>Cargando Evento...</p>
        }
        </>
    );
}

export default ItemDetail;