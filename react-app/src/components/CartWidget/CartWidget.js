import bag from "./assets/bag.svg"
import "./CartWidget.css"
import { useContext } from "react"
import { Context } from "../../context/CartContext.js"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useContext(Context)

    return (
        <Link to="/cart" className="box-bag">
            <img className="img-bag" src={bag} alt="bag"/>
            <p className="p-bag">{totalQuantity}</p>
        </Link>
    );
}

export default CartWidget