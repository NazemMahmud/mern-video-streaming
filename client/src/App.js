import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/authentication/register/Register";
import Login from "./pages/authentication/login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
