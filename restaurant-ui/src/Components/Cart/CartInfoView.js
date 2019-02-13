import React from 'react';
import CartComponent from "./CartComponent";

const CartInfoView = props => {

    let cartItems = [];

    if (cartItems !== null) {
        props.cart.map((item, key) => {
            cartItems.push(<CartComponent key={key} item={item} updatedCart={props.updatedCart}/>)
        });
    }

    return(
        <div className={'p-grid'}>
            <div className={'p-col'}>
                    {cartItems}
                <div>
                    Cart Total: { props.cartTotal }
                </div>
            </div>
        </div>
    );
};
export default CartInfoView;