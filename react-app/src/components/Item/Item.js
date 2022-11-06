import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, img, name, price}) => {
    return (
        <div className="container-product">
            <img className="img-product" src={img} alt={name}></img>
            <h2 className="name-product">{name}</h2>
            <p className="price-product">${price}</p>
            <Link className="detail-product" to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item