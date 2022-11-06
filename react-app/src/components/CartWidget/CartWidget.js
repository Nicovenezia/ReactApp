import bag from "./assets/bag.svg"
import "./CartWidget.css"
import { useContext } from "react"
import { Context } from "../../context/CartContext.js"

const CartWidget = () => {
    const { totalQuantity } = useContext(Context)

    return (
        <div to="/cart" className="box-img">
            <img className="img-bag" src={bag} alt="bag"/>
            <p className="p-bag">{totalQuantity}</p>
        </div>
    )
}

export default CartWidget