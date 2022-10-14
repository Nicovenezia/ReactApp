const ItemDetail = ({ id, name, price, category, img, stock, description }) =>{
    return (
        <div>
            <img className="img-product" src={img} alt={name}></img>
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail