import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/authentication/login/Login";
import {getAccessToken} from "./utility/utils";
import PageNotFound from "./pages/PageNotFound";
import AuthLayout from "./layout/AuthLayout";


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={getAccessToken ? <Navigate to='/' replace={true} /> : <Login />} />
          <Route path="*" element={<PageNotFound />} />
            <Route exact path="/" element={<AuthLayout />}>
                <Route exact path="/" element={<Home />}/>
            </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
