import React, {Component} from 'react';
import '../Restaurant/css/restaurantComponent.css'
import axios from 'axios';

import MenuView from "./MenuView";

export default class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            food: this.props.food,
            addedToCart: false,
            cartItemAdded: '',
            cartTotal: '',
            cartErrorMessage: false

        };
        this.addToCart = this.addToCart.bind(this);

    }

    //TODO check it out of stock when building the menu and render properly

    addToCart(){
        axios.post('http://localhost:8080/cart-add-item-request',{
            body: this.state.food
        })
            .then(response => response.data)
            .then(data => {
                this.setState({
                    addedToCart: data.addedToCart,
                    cartTotal: data.cartTotal,
                    cartErrorMessage: data.errorMessage
                });
            })
    }

    render(){
        return(
            <MenuView food={this.state.food} addToCart={this.addToCart}/>
        );
    }
}