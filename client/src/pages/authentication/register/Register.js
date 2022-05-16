import React, {useEffect, useReducer} from "react";
import { useState } from "react";
import "./Register.scss";
import logo from '../../../assets/images/logo.png'
import {checkDisableButton} from "../../../utility/utils";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
    // const navigate = useNavigate();
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

    // to enable/disable submit button
    useEffect(() => {
        setIsDisabled(checkDisableButton(formInput))
    }, [formInput])

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
        input.touched = true
        formValidation(input, inputIdentifier);
    };

    const handleGetStart = () => {
        setIsValid(formInput.email.isValid);
    };
    const handleFinish = async (e) => {
        e.preventDefault();
    };


    return (
        <div className="register">
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
                    <form className="input">
                        <input type="text" placeholder="username" required id="name"
                               name={formInput.name.name} onChange={event => handleInput(event, inputKeys[0])}/>
                        <input type="password" placeholder="password" required id="password"
                               name={formInput.password.name}
                               onChange={event => handleInput(event, inputKeys[2])}
                        />
                        <button className="registerButton" disabled={isDisabled} onClick={handleFinish}>
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Register;
