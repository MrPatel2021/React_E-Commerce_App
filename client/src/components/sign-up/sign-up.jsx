import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButtonSignIn from '../custom-button/custom-button-sign-in';

import { signUpStart } from '../../redux/users/users.action';

import './sign-up.css';

const SignUp = ({ signUpStart }) =>{
    const [ userCredentials, setUserCredentials ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }
        
        signUpStart({ displayName, email, password })
    };

    const handleChange = event => {
        const { name, value} = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up" onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={handleChange}
                        lable="Display Name"
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        lable="Email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        lable="Password"
                        required
                    />
                     
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        lable="Confirm Password"
                        required
                    />

                    <CustomButtonSignIn type='submit'> SIGN UP </CustomButtonSignIn>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);