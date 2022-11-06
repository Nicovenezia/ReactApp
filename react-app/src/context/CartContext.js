import { useState, useEffect, createContext } from "react"

export const Context = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvaider =({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0) 

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
        setTotalQuantity(getQuantity())
      }else {
        console.log("ya esta en el carrito");
      }
    }
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
    
    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.count
        })

        return accu
    }
  

    return (
        <Context.Provider value={{cart, addItem, removeItem, totalQuantity}}>
            {children}
        </Context.Provider> 
    )
}