import React, {useEffect} from "react";
import {isUserLoggedIn} from "../../utility/utils";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!isUserLoggedIn()) {
            navigate("/login");
        }
    }, []);

    return (
      <div style={{ margin: '0 auto'}}>
          <h1> Home page</h1>
      </div>
    );
}

export default Home;
