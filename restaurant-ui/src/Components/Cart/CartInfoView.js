import React from 'react';
import CartComponent from "./CartComponent";
import './css/cartInfoView.css';

const CartInfoView = props => {

    let cartTotalClassName =  props.cartTotal === '$0.00' ? 'empty-cart-total-container' : 'cart-total-container';
    let cartItems = [];

    if (cartItems !== null) {
        props.cart.map((item, key) => {
            cartItems.push(<CartComponent key={key} item={item} updatedCart={props.updatedCart}/>)
        });
    }

    return(
        <div className={'cart-info-view-container p-grid'}>
            <div className={'p-col'}>
                <div>
                    <div className={'tuttomare-image-cart'} />
                </div>
                <div className={'cart-header'}>
                    <span>Name</span>
                    <span className={'cart-header-price'}>Price</span>
                    <span className={'cart-header-remove-item'}>Remove Item</span>
                </div>
                <div className={'p-col'}>
                    {cartItems}
                </div>
                <div className={'test'}>
                { props.cartTotal === '$0.00' ?
                    <div className={'empty-cart-total-text'}>
                        There are no items in your cart.
                    </div>
                    :
                    ''
                }
                <div className={cartTotalClassName}>
                    Cart Total: { props.cartTotal }
                </div>
                </div>
            </div>
        </div>
    );
};
export default CartInfoView;