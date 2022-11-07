import "./Cart.css"
import { useContext } from "react"
import { Context } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, total, clearCart, totalQuantity } = useContext(Context)

    if(totalQuantity === 0) {
        return (
            <h2 className="h2-cart-empty">Carrito vacio!</h2>
        )
    }

    return (
        <div className="container-cart">
            <h2 className="h2-cart-empty">Carrito</h2>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <div>Precio Total: ${total}</div>
            <button onClick={() => {clearCart()}} className="box-add">Vaciar el carrito</button>
            <Link to='/checkout' className="box-add">Checkout</Link>
        </div>
    )
}

export default Cart