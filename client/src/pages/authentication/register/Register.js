import React, {useEffect, useReducer} from "react";
import { useState } from "react";
import "./Register.scss";
import logo from '../../../assets/images/logo.png'
import {checkDisableButton} from "../../../utility/utils";
import {Link, useNavigate} from "react-router-dom";
import {Alert, Slide, Snackbar} from "@mui/material";
import {registration} from "../../../services/Authentication/auth.service";

const Register = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isValid, setIsValid] = useState(false);

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: {
                name: "name",
                value: "",
                isValid: false,
                touched: false
            },
            email: {
                name: "email",
                value: "",
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                isValid: false,
                helperText: "",
                touched: false
            },
            password: {
                name: "password",
                value: "",
                isValid: false,
                touched: false
            },
        }
    );
    const inputKeys = Object.keys(formInput);

    /******* Snackbar related property start **************************/
    const SlideTransition = props => {
        return <Slide {...props} direction="right"/>;
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
        });
    };
    /******* Snackbar related property end **************************/

    // to enable/disable submit button
    useEffect(() => {
        setIsDisabled(checkDisableButton(formInput));
    }, [formInput]);

    const formValidation = (input, inputIdentifier) => {
        switch (inputIdentifier) {
            case 'email':
                input.isValid = !!(formInput.email.value.match(formInput.email.pattern));
                input.helperText = (!input.isValid) ? "Invalid email address" : "";
                break;
            case 'name':
            case 'password':
            default:
                input.isValid = !!input.value.length;
        }

        setFormInput({...formInput, [inputIdentifier]: input});
    };

    // register form: on change of an input field action
    const handleInput = (event, inputIdentifier) => {
        const input = formInput[inputIdentifier];
        input.value = event.target.value;
        input.touched = true;
        formValidation(input, inputIdentifier);
    };

    const handleGetStart = () => {
        setIsValid(formInput.email.isValid);
    };

    // format data before submit
    const formatSubmitData = () => {
        const data = {};
        for (let loginData in formInput) {
            data[loginData] = formInput[loginData].value;
        }

        return data;
    };

    // sign up action
    const signUp = async event => {
        event.preventDefault();
        const formData = formatSubmitData();

        await registration(formData)
            .then(response => {
                navigate("/login");
            })
            .catch(error => {
                console.log('error..', error)
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
        <div className="register">
            <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={open}
                onClose={snackClose}
                key={vertical + horizontal}>
                <Alert severity={type}> {message}</Alert>
            </Snackbar>
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={logo}
                        alt=""
                    />
                    <button className="loginButton"> <Link to="/login">  Sign In </Link></button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!isValid ? (
                    <div className="input">
                        <input type="email" placeholder="email address" required
                               id="email"
                               name={formInput.email.name}
                               onChange={event => handleInput(event, inputKeys[1])}
                        />
                        <button className="registerButton" onClick={handleGetStart}>
                            Get Started
                        </button>
                    </div>
                ) : (
                    <form className="input" onSubmit={signUp}>
                        <input type="text" placeholder="username" required id="name"
                               name={formInput.name.name} onChange={event => handleInput(event, inputKeys[0])}/>
                        <input type="password" placeholder="password" required id="password"
                               name={formInput.password.name}
                               onChange={event => handleInput(event, inputKeys[2])}
                        />
                        <button className="registerButton" disabled={isDisabled} type="submit">
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;
