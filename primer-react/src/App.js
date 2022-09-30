import "./App.css";
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import { CartWidget } from "./components/CartWidget/CartWidget";

function App() {
    return(
        <div className="App">
            <NavBar />
            <ItemListContainer title="listado" productos="productos"/>
        </div>
    );
}


export default App;