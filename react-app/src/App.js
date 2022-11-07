
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvaider } from "./context/CartContext.js"
import { NotificationProvider } from "./notification/NotificationService.js"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvaider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element= {<ItemListContainer greeting={"Productos"} />}/>
              <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
              <Route path='/detail/:productId' element= {<ItemDetailContainer />}/>
              <Route path='/cart' element= {<Cart />}/>
              <Route path='/checkout' element= {<Checkout />}/>
            </Routes>
          </BrowserRouter>
        </CartProvaider>
      </NotificationProvider>
    </div>
  );
}

export default App;
