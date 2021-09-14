import React from 'react';

import './cart-item.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className="name-cart-item">{name}</span>
            <span className="price-cart-item">
                {quantity} X {price}/-
            </span>
        </div>
    </div>
);

export default CartItem;
