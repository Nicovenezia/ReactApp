import { useState, useEffect } from "react"
import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../services/firebase"

const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, "categories")

        getDocs(collectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })
            setCategories(categoriesAdapted)
        })
    }, [])

    return(
        <nav className="Navbar">
            <NavLink className="h1-name" to="/">iStore</NavLink>
            <div className="box-category">
                {
                    categories.map(cat => (
                        <NavLink key={cat.id} to={`/category/${cat.slug}`} className="box-link">{cat.label}</NavLink>
                    ))
                }
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar