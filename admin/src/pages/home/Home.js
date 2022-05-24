import React, {useEffect} from "react";
import {isUserLoggedIn} from "../../utility/utils";
import {useNavigate} from "react-router-dom";
import "./Home.scss";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isUserLoggedIn()) {
            navigate("/login");
        }
    }, []);

    return (
      <div style={{ margin: '0 auto'}} className="home">
          <h1>Admin Home page</h1>
      </div>
    );
}

export default Home;
