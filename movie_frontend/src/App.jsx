import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/add" element={<AddMovie />} />
                <Route path="/edit/:id" element={<EditMovie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
