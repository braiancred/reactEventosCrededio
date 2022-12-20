import "../App.css";

const ItemDetail = ({ item }) => {

    return (
        <>
        {
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
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default ItemDetail;