import React, { Component } from 'react'
import {CartView} from "./CartView";

export default class CartComponent extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <CartView />
        );
    }
};