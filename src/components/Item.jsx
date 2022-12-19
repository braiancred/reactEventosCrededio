import { Link } from "react-router-dom";

const Item = ({ banner, id }) => {
    return (
            <div className="card">
                <img src={banner} alt="banner del evento"/>
                <button><Link to={`/item/${id}`}>Mostrar info</Link></button>
            </div> 
    );
}

export default Item;