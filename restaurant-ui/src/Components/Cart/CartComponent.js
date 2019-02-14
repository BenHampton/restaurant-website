import React, { Component } from 'react'
import axios from 'axios';
import {Growl} from "primereact/growl";
import './css/cartComponent.css'
import CartView from "./CartView";

export default class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
            cartTotal: '',
            removedItemName: '',
            cartErrorMessage: false,
            removedFromCartItem: false
        };
        this.removeFromCart = this.removeFromCart.bind(this);
        this.renderGrowlText = this.renderGrowlText.bind(this);
    }

    removeFromCart(itemInCart){
        axios.post('http://localhost:8080/cart-remove-item-requests',{
            id: itemInCart.id,
            name: itemInCart.name,
            price: itemInCart.price,
            quantity: itemInCart.quantity,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.data)
            .then(data => {
                this.setState({
                    removedItemName: data.name,
                    cartTotal: data.cartTotal,
                    removedFromCartItem: true,
                    cartErrorMessage: data.errorMessage
                }, () => {
                    this.growl.show({ summary: 'Remove From Cart', detail: this.renderGrowlText() });
                    this.cartTotalAfterRemovedItem(this.state.cartTotal)
                });
            })
    }

    cartTotalAfterRemovedItem(cartTotal){
        this.props.updatedCart(cartTotal);
    }

    renderGrowlText(){
        return(
            <div>
                <div>
                    {this.state.itemName}
                </div>
                <br />
                <div>
                    <b>Updated Cart Total: </b>{this.state.cartTotal}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                <Growl ref={(el) => this.growl = el} className={'cart-growl'} />
                <CartView item={this.state.item}
                          removedFromCartItem={this.state.removedFromCartItem}
                          removeFromCart={this.removeFromCart}/>
            </div>
        );
    }
};