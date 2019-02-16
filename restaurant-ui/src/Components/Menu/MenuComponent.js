import React, {Component} from 'react';
import '../Restaurant/css/restaurantComponent.css'
import  './css/menuComponent.css';
import axios from 'axios';

import MenuView from "./MenuView";
import {Growl} from "primereact/growl";
import Link from "react-router-dom/es/Link";

export default class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            food: this.props.food,
            addedToCart: false,
            cartErrorMessage: false,
            cartItemAdded: '',
            cartTotal: '',
            itemName: '',
            quantity: '',
            additionalComments: ''
        };
        this.addToCart = this.addToCart.bind(this);
        this.renderGrowlText = this.renderGrowlText.bind(this);

    }

    //TODO check it out of stock when building the menu and render properly

    addToCart(){

        axios.post('http://localhost:8080/cart-add-item-requests',{
            name: this.state.food.name,
            price: this.state.food.price,
            quantity: this.state.quantity,
            additionalComments: this.state.additionalComments,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.data)
            .then(data => {
                this.setState({
                    itemName: data.name,
                    addedToCart: data.addedToCart,
                    cartTotal: data.cartTotal,
                    cartErrorMessage: data.errorMessage
                }, () => {
                    this.growl.show({summary: 'Added To Cart', detail: this.renderGrowlText(), sticky: true});
                });
            })
    }

    renderGrowlText(){
        return(
            <div>
                <div>
                    {this.state.itemName}
                </div>
                <br />
                <div>
                    <b>Cart Total: </b>{this.state.cartTotal}
                </div>
                <Link
                    to={{
                        pathname: '/cart'
                    }} >
                    <div>
                        View Cart
                    </div>
                </Link>
            </div>
        )
    }

    render(){
        return(
            <div>
                <Growl ref={(el) => this.growl = el} className={'menu-growl'} />
                <MenuView food={this.state.food} addToCart={this.addToCart}/>
            </div>
        );
    }
}