import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/styles.css";
import { Routes, Route } from "react-router-dom";
import PageMealById from "./pages/PageMealById";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receta/:id" element={<PageMealById />} />
        </Routes>
    );
}

export default App;
