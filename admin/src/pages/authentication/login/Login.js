import React, {useEffect, useReducer} from "react";
import {useState} from "react";
import "./Login.scss";
import logo from '../../../assets/images/logo.png'
import {checkDisableButton} from "../../../utility/utils";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../../../services/Authentication/auth.service";
import {useDispatch} from "react-redux";
import {handleLogin} from "../../../redux/authentication";
import {Alert, Slide, Snackbar} from "@mui/material";

// import React, { useContext, useState } from "react";
// import { login } from "../../context/authContext/apiCalls";
// import { AuthContext } from "../../context/authContext/AuthContext";
// import "./login.css";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    /******* Snackbar related property start **************************/
    const SlideTransition = props => {
        return <Slide {...props} direction="right" />;
    }

    const [snackData, setSnackData] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: '',
        Transition: SlideTransition,
        type: ''
    });
    const {vertical, horizontal, open, message, type} = snackData;
    const snackClose = () => {
        setSnackData({
            ...snackData,
            open: false
        })
    }
    /******* Snackbar related property end **************************/

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

    // input validation
    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        input.touched = true
        formValidation(input, inputIdentifier);
    };

    // format data before submit
    const formatSubmitData = () => {
        const data = {};
        for (let loginData in formInput) {
            data[loginData] = formInput[loginData].value;
        }
        return data;
    }

    const signIn = async event => {
        event.preventDefault();
        const formData = formatSubmitData()

        await login(formData)
            .then(response => {
                if (response.data.data.isAdmin) {
                    dispatch(handleLogin(response.data.data));
                    navigate("/");
                }

                setSnackData({
                    ...snackData,
                    open: true,
                    type: 'error',
                    message: 'You are not permitted'
                })
            })
            .catch(error => {
                setSnackData({
                    ...snackData,
                    open: true,
                    type: 'error',
                    message: error.response.data.message
                })
            });
        // TODO: add a loader
    };

    return (
        <div className="login">
            <Snackbar  anchorOrigin={{vertical, horizontal}}
                       open={open}
                       onClose={snackClose}
                       key={vertical + horizontal}>
                <Alert severity={type}> {message}</Alert>
            </Snackbar>
            <div className="login">
                <form className="loginForm">
                    <input type="email" placeholder="Email" required  className="loginInput"
                        name={formInput.email.name} id="email"
                        onChange={event => handleInput(event, inputKeys[0])}/>
                    <input type="password" placeholder="Password" required className="loginInput"
                        name={formInput.password.name}
                        id="password"
                        onChange={event => handleInput(event, inputKeys[1])}/>
                    <button className="loginButton" disabled={isDisabled} onClick={signIn} >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
