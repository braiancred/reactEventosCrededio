import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ banner, id }) => {
    return (
            <div className="card">
                <img className="cardImagen" src={banner} alt="banner del evento"/>
                <button className="botonMasInfo"><Link to={`/item/${id}`}>Mostrar info</Link></button>
            </div> 
    );
}

export default Item;