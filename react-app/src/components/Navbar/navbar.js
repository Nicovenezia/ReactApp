
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav className="Navbar">
            <h1 className="h1-name">iPhoneTouch</h1>
            <div>
                <button className="box-btn">Productos</button>
                <button className="box-btn">Nosotros</button>
                <button className="box-btn">Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar