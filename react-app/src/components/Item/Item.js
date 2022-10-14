import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, img, name, price}) => {
    return (
        <div>
            <img className="img-product" src={img} alt={name}></img>
            <h2>{name}</h2>
            <p>${price}</p>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item