import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(Response => {
            setProducts(Response)
        }).finally(() => {
            setLoading(false)
        })
    },[])

    if(loading){
        return <h1>Productos...</h1>
    }

    return (
    <div className="box-itemlistContainer">
        <h1 className="h1-item">
            {greeting}
        </h1>
        <ItemList products = {products}/>
    </div>
    )
}

export default ItemListContainer