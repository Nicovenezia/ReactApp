import { useContext } from "react"
import { Context } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { NotificationContext } from "../../notification/NotificationService"
import { db } from "../../services/firebase"
import { FromContext } from "../../context/ItemForm/ItemForm.js"
import ItemForm from "../../context/ItemForm/ItemForm.js"
import "./Checkout.css"

const Checkout = () => {
    const { cart, total } = useContext(Context)
    const { setNotification } = useContext(NotificationContext)
    const { setName, setPhone, setEmail } = useContext(FromContext)

    const createOrder = async () =>{
        try {
            const Order = {
                buyer: {
                    name: setName,
                    phone: setPhone,
                    mail: setEmail,
                },
                items: cart,
                total: total,
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, "products")
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.count
                
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            
            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, Order)
                setNotification("success", `El id de su orden es: ${orderAdded.id}`);
            } else {
                setNotification("error", `Hay productos que estan fuera de stock`);
            }
        } catch (error) {
            console.log(error);
        }
        }
    

    return (
        <div className="container-checkout">
            <h1 className="h1-checkout">Checkout</h1>
            <ItemForm />
            <button onClick={createOrder} className="box-add">Generar orden</button>
        </div>
    )
}

export default Checkout