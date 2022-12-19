import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <header className="navbar">
                <div className="titulo"><Link to="/">ELECTRONIC ARG</Link></div>
                <div className="estilosElectronica">
                    <div className="estilo"><Link to="/style/Techno">Techno</Link></div>
                    <div className="estilo"><Link to="/style/Melodic-Techno">Melodic-Techno</Link></div>
                    <div className="estilo"><Link to="style/Tech-House">Tech-House</Link></div>
                    <div className="estilo"><Link to="/style/Progressive">Progressive</Link></div>
                </div>
                <div id="icono"><button><AiOutlineShoppingCart /></button></div>
            </header>
        </div>
    )
}


export default Navbar;