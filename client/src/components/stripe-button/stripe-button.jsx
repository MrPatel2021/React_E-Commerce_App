import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JFDC9SFYRNknp8e7vezEm2FOQ86JeqBxLJFkqWATyFU1vti31zoYL0rnYOoSSuKd3P3e5TxQFMPqDuitZ0rxFVm00yDkOzyS8';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log('Payment Error: ', error);
            alert(
                'There was an issue with your payment. Please sure you use the provided credit card.'
            );
        });
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='Mr. E-Commerce'
            billingAddress
            shippingAddress
            image=''
            description={`Your Total Is: ${price} /-`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;