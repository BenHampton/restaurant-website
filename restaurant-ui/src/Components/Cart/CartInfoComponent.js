import React, {Component} from 'react'
import axios from 'axios';
import './css/cartComponent.css'
import CartInfoView from "./CartInfoView";

export default class CartInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            cartTotal: '',
            updatedCart: null,
            cartErrorMessage: false
        };
        this.updatedCart = this.updatedCart.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8080/cart-items-responses')
            .then(response => response.data)
            .then(data => {
                this.setState({ cart: data.cart,
                                      cartTotal: data.cartTotal,
                                      cartErrorMessage: data.isErrorMessage });
            });
    }

    updatedCart(updatedCart){
        this.setState({cartTotal: updatedCart});
    }

    render(){
        return(
            <CartInfoView cart={this.state.cart}
                          cartTotal={this.state.cartTotal}
                          updatedCart={this.updatedCart}/>
        );
    }
};