
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="Navbar">
            <Link className="h1-name" to="/">iStore</Link>
            <div>
                <Link className="box-btn" to="/">Productos</Link>
                <Link className="box-btn" to="/nosotros">Nosotros</Link>
                <Link className="box-btn" to="/contacto">Contacto</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar