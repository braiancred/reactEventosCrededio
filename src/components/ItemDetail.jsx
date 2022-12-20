import "../App.css";

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            <div className="cardDetalle">
                <div className="cardImagen">
                    <img src={item.banner} alt="banner del evento"></img>
                </div>
                <div className="cardTexto">
                    <div className="divTexto">
                        <div><h1 className="cardTitulo">{item.name}</h1></div>
                        <div><p>{item.style}</p></div>
                        <div><p>{item.location}</p></div>
                        <div><p>{item.date}</p></div>
                        <div><p>{item.description}</p></div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default ItemDetail;