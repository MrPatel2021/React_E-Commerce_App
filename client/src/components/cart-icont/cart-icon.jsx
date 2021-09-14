import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { togglecartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';

import './cart-icon.css';

const CartIcon = ({ togglecartHidden, itemCount }) => (
    <div className="cart-icon" onClick={togglecartHidden}>
        <ShoppingIcon className="shoping-icon">
            <span className="item-count">{itemCount}</span>
        </ShoppingIcon>
    </div>
);

const mapDispatchToProps = dispatch => ({
    togglecartHidden: () => dispatch(togglecartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
