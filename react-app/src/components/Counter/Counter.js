import { useState } from "react"
import "./Counter.css"

const Counter = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    } 

    const decrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
    } 

    return(
        <div className="container-counter">
            <div className="box-counter">
                <button className="button-count" onClick={decrement}>-</button>
                <p className="p-count">{count}</p>
                <button className="button-count" onClick={increment}>+</button>
            </div>
            <div className="box-agregar">
                <button className="box-add" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter