
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="Navbar">
            <Link className="h1-name" to="/">iStore</Link>
            <div className="box-category">
                <Link className="box-link" to="/category/iphone">iPhone</Link>
                <Link className="box-link" to="/category/ipad">iPad</Link>
                <Link className="box-link" to="/category/mac">Mac</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar