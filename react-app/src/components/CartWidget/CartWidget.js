import bag from "./assets/bag.svg"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="box-img">
            <img className="img-bag" src={bag} alt="bag"/>
            <p className="p-bag">0</p>
        </div>
    )
}

export default CartWidget