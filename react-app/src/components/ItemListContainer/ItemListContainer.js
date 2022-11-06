import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef).then(Response => {
            const productsAdapted = Response.docs.map(doc => {
                const data = doc.data()

                return  {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
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