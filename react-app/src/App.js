
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvendio"}/>
    </div>
  );
}

export default App;
