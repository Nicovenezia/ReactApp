import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts, getProductByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const setCategory = categoryId ? getProductByCategory : getProducts

        setCategory(categoryId).then(Response => {
            setProducts(Response)
        }).finally(() => {
            setLoading(false)
        })
    },[categoryId])

    if(loading){
        return <h1 className="loauder">
            <DotSpinner 
            size={40}
            speed={0.9} 
            color="black" 
            />
        </h1>
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