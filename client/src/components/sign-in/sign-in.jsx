import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButtonSignIn from '../custom-button/custom-button-sign-in';

import { googleSignInStart, emailSignInStart } from '../../redux/users/users.action';

import './sign-in.css';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCredentials, setCredentials ] = useState({ 
        email: '', 
        password: ''
    });

    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value })
    };
        
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={ handleSubmit }>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={email} 
                        handleChange={ handleChange }
                        lable="email"
                        required 
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={password} 
                        handleChange={ handleChange }
                        lable="password"
                        required 
                    />

                    <div className="buttons">
                        <CustomButtonSignIn type="submit"> Sign In </CustomButtonSignIn>
                        <CustomButtonSignIn 
                            type='button' 
                            onClick={googleSignInStart} 
                            isGoogleSignIn
                        > 
                            {' '}
                            Sign In With Google 
                            {' '}
                        </CustomButtonSignIn>
                    </div>
                </form>
            </div>
        );
    };

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => 
        dispatch(emailSignInStart({email, password})
    )
})

export default connect(null, mapDispatchToProps)(SignIn);