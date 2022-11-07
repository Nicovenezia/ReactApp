import "./ItemDetail.css"
import "../Item/Item.css"
import Counter from "../Counter/Counter.js"
import { useContext } from "react"
import { Context } from "../../context/CartContext.js"
import { NotificationContext } from "../../notification/NotificationService"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, price, category, img, stock, description}) =>{
    const {addItem, isInCart} = useContext(Context)
    const {setNotification} = useContext(NotificationContext)

    const handleOnAdd = (count) => {
        const productToAdd = {
            id, name, price, count
        }
        addItem(productToAdd)
        setNotification("success", `Se agrego ${count} ${name}`)
    }

    return (
        <div className="container-item-detail">
            <div>
                <img className="img-product" src={img} alt={name}></img>
                <h2 className="name-product">{name}</h2>
                <p className="price-product">${price}</p>
                <p>{description}</p>
            </div>
            <div>
                {
                    !isInCart(id)
                        ? <Counter onAdd={handleOnAdd} stock={stock} />
                        : <Link to='/cart' className="box-add">Finalizar compra</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail