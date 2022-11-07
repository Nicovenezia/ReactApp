import './CartItem.css'
import { useContext } from 'react'
import { Context } from '../../context/CartContext'


const CartItem = ({ id, name, count, price }) => {
    const { removeItem } = useContext(Context)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='cart-item'>
            <h2 className='h2-cart-item'>
                {name}
            </h2>
            <p className='p-cart-item'>
                Cantidad: {count}
            </p>
            <p className='p-cart-item'>
                Precio x Unidad: ${price}
            </p>           
            <p className='p-cart-item'>
                Subtotal: ${price * count}
            </p>
            <div>
                <button className='button-cart-item' onClick={() => handleRemove(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem