import { useState } from "react"
import "./Counter.css"

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < 10){
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
                <button onClick={decrement}>-</button>
                <p className="p-count">{count}</p>
                <button onClick={increment}>+</button>
            </div>
            <div className="box-agregar">
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter