import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"  
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams, useNavigate } from "react-router-dom"
import { DotSpinner } from '@uiball/loaders'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemDetailContainer = ({setCart}) =>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        const docRef = doc(db, "products", productId)

        getDoc(docRef).then(product => {
            const data = product.data()
            const productsAdapted = {id: product.id, ...data}
            setProduct(productsAdapted)
            }).finally(() => {
                setLoading(false)
            })
    })

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
        <div>
            <h2 className="h2-name-detail">Detalle del producto</h2>
            <button className="box-add" onClick={() => navigate(-1)}>Back</button>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer