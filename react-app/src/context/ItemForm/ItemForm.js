import "./ItemForm.css"
import { useState, createContext } from "react"

export const FromContext = createContext({
    setName: "",
})

const ItemForm = () => {

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [confirmEmail, setConfirmEmail] = useState();

    return (
        <form className="container-form" >
            <div className="box-form">
                <h2 className="box-h2-form">Completa el formulario!</h2>
                <div className="container-input-form">
                    <div className="box-input-form">
                        <input type="text" placeholder="Nombre" className="input-form" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="box-input-form">
                        <input type="number" placeholder="Telefono" className="input-form" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </div>
                    <div className="box-input-form">
                        <input type="email" placeholder="Email" className="input-form" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="box-input-form">
                        <input type="email" placeholder="Confirmar Email" className="input-form" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}></input>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ItemForm