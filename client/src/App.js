import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/authentication/register/Register";
import Login from "./pages/authentication/login/Login";
import {getAccessToken, isUserLoggedIn} from "./utility/utils";
import PageNotFound from "./pages/PageNotFound";


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/register" element={getAccessToken ? <Navigate to='/' replace={true} /> : <Register />} />
                <Route exact path="/login" element={getAccessToken ? <Navigate to='/' replace={true} /> : <Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
