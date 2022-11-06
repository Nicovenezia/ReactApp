import "./ItemDetail.css"
import "../Item/Item.css"
import Counter from "../Counter/Counter.js"
import { useContext } from "react"
import { Context } from "../../context/CartContext.js"
import { NotificationContext } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, price, category, img, stock, description}) =>{
    const {addItem} = useContext(Context)
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
                <Counter onAdd={handleOnAdd} stock={stock}/>
            </div>
        </div>
    )
}

export default ItemDetail