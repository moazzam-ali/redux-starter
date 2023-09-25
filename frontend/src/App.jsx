import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Vegetables from "./pages/Vegetables/Vegetables";
import Fruits from "./pages/Fruits/Fruits";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/fruits" element={<Fruits />} />
                {/* <Route path="/cart" element={<Cart />} /> */}
            </Routes>
        </div>
    );
}

export default App;
