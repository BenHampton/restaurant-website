import React, {Component} from 'react';
import RestaurantView from "./RestaurantView";
import axios from 'axios';

export default class RestaurantComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            appetizers: [],
            salads: [],
            pastas: [],
            veals: [],
            beefs: [],
            chickens: [],
            seafoods: [],
            sides: []

        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/food-on-menu-responses')
            .then(response =>  response.data)
            .then( data => {
                this.setState({appetizers: data.menuAppetizers,
                                        salads: data.menuSalads,
                                        pastas: data.menuPastas,
                                        veals: data.menuVeals,
                                        beefs: data.menuBeefs,
                                        chickens: data.menuChickens,
                                        seafoods: data.menuSeafoods,
                                        sides: data.menuSides});
            })
    };

    render(){
        return(
                <RestaurantView appetizers={this.state.appetizers}
                                salads={this.state.salads}
                                pastas={this.state.pastas}
                                veals={this.state.veals}
                                beefs={this.state.beefs}
                                chickens={this.state.chickens}
                                seafoods={this.state.seafoods}
                                sides={this.state.sides}/>
        );
    }
}