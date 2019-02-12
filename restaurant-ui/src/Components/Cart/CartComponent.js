import React, { Component } from 'react'
import {CartView} from "./CartView";
import axios from 'axios';

export default class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            cartErrorMessage: false
        }
    }

    componetDidMount(){
        //TODO make call to Spring Boot API to get all redis cache List<RedisFood> and map it to view
        axios.get('http://localhost:8080/')
    }


    render(){
        return(
            <CartView />
        );
    }
};