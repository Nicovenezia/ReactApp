
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={"Productos"} />}/>
          <Route path='/detail/:productId' element= {<ItemDetailContainer />}/>
          <Route path='/nosotros' element= {<Nosotros />}/>
          <Route path='/contacto' element= {<Contacto />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
