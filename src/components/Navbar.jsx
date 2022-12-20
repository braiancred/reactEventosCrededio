import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">ELECTRONIC ARG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/style/Techno">Techno</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/style/Melodic-Techno">Melodic-Techno</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="style/Tech-House">Tech-House</Link>
                                </li>
                                 <li className="nav-item">
                                    <Link className="nav-link" to="style/Progressive">Progressive</Link>
                                </li>
                                <div id="icono"><button><AiOutlineShoppingCart /></button></div>
                            </ul>
                        </div>
                    </div>
            </nav> 
        </div>
        /* <div>
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
        </div> */
    )
}


export default Navbar;