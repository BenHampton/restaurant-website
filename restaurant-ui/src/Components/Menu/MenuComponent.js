import React, {Component} from 'react';
import '../Restaurant/css/restaurantComponent.css'
import MenuView from "./MenuView";

export default class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            food: this.props.food
        }

    }

    addToCart(){

    }

    render(){
        console.log(this.state.food)
        return(
            <div>
                <MenuView food={this.state.food}/>
            </div>
        )
    }
}