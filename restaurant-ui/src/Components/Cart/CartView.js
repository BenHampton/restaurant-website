import React from 'react';
import {Button} from "primereact/button";
import './css/cartView.css';

const CartView = props => {

    let cartViewClassName = props.removedFromCartItem ? 'remove-item-transition' :'p-grid cart-container';

    const removeItemFromCart = () => {
        props.removeFromCart(props.item)
    };

    return(
        <div className={cartViewClassName}>
            <div className={'p-col cart-item'}>
                {props.item.name}
            </div>
            <div className={'p-col cart-item'}>
                {props.item.description}
            </div>
            <div className={'p-col cart-item'}>
                {props.item.price}
            </div>
            <div className={'p-col cart-item'}>
                <Button label={'Remove From Cart'}
                        onClick={removeItemFromCart} />
            </div>
        </div>
    );
};
export default CartView;