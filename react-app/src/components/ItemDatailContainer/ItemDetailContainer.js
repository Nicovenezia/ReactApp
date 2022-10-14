import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"   
import ItemDetail from "../ItemDetail/ItemDetail"
import Counter from "../Counter/Counter.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    
    useEffect(() => {
        getProductById(productId).then(product => {
                setProduct(product)
            }).finally(() => {
                setLoading(false)
            })
    })

    if(loading){
        return <h1>Producto...</h1>
    }

    return (
        <div>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
            <Counter />
        </div>
    )
}

export default ItemDetailContainer