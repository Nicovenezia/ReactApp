import App from "../../App"
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return(
        <nav>
            <h1>Ecommerce</h1>
            <div>
                <button>Productos</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default App