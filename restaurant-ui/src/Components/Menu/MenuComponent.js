import React, {Component} from 'react';
import '../Restaurant/css/restaurantComponent.css'
import MenuView from "./MenuView";

export default class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            food: this.props.food
        }
        this.addToCart = this.addToCart.bind(this);

    }

    addToCart(){
        console.log(this.state.food);
    }

    render(){
        return(
            <MenuView food={this.state.food} addToCart={this.addToCart}/>
        );
    }
}