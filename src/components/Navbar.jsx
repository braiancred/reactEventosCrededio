import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="nav-item">
                            <Link className="nav-link" to="/"><div className="respuesta">ELECTRONIC ARG</div></Link>
                        </div>
                        <ul class="navbar-nav mx-auto">
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
                        </ul>
                        <div>
                            <Link to="/cart" className="nav-link"><AiOutlineShoppingCart /></Link>
                        </div>
                    </div>
                </div>
            </nav> 
        </div>
    )
}


export default Navbar;