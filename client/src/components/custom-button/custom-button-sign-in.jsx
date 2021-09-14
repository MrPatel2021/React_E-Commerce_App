import React from 'react';

import './custom-button-sign-in.css';

const CustomButtonSignIn = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button 
        className={`${inverted ? 'inverted' : '' } ${
            isGoogleSignIn ?  'google-sign-in' : '' 
        } custom-button-sign-in `} 
        { ...otherProps }
    >
        { children }
    </button>
);

export default CustomButtonSignIn;