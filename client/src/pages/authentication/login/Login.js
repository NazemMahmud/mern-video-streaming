import React, {useEffect, useReducer} from "react";
import {useState} from "react";
import "./Login.scss";
import logo from '../../../assets/images/logo.png'
import {checkDisableButton} from "../../../utility/utils";
import {Link} from "react-router-dom";


const Login = () => {
    // const { dispatch } = useContext(AuthContext);

    const [isDisabled, setIsDisabled] = useState(true);
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                isValid: false,
                helperText: "",
                touched: false
            },
            password: {
                name: "password",
                value: "",
                isValid: false,
                touched: false
            }
        }
    );
    const inputKeys = Object.keys(formInput);

    // to enable/disable submit button
    useEffect(() => {
        setIsDisabled(checkDisableButton(formInput))
    }, [formInput])

    const formValidation = (input, inputIdentifier) => {
        if (inputIdentifier === "email") {
            input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
            input.helperText = (!input.isValid) ? "Invalid email address" : "";
        }
        if (inputIdentifier === "password") {
            input.isValid = !!input.value.length;
        }

        setFormInput({...formInput, [inputIdentifier]: input});
    };


    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        input.touched = true
        formValidation(input, inputIdentifier);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(formInput);
        // login({ email, password }, dispatch);
    };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={logo}
                        alt="msflix logo"
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email" required
                        name={formInput.email.name} id="email"
                        onChange={event => handleInput(event, inputKeys[0])}/>
                    <input type="password" placeholder="Password" required
                        name={formInput.password.name}
                        id="password"
                        onChange={event => handleInput(event, inputKeys[1])}/>
                    <button className="loginButton" disabled={isDisabled} onClick={handleLogin} >
                        Sign In
                    </button>
                    <span> New to Msflix?
                        <Link to='/register'> <b>Sign up now.</b> </Link>
                    </span>
                    {/*<small>*/}
                    {/*    This page is protected by Google reCAPTCHA to ensure you're not a*/}
                    {/*    bot. <b>Learn more</b>.*/}
                    {/*</small>*/}
                </form>
            </div>
        </div>
    );
}

export default Login;
