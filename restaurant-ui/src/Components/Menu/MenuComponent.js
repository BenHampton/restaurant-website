import React, {Component} from 'react';
import MenuView from "./MenuView";
import axios from 'axios';
import {Column} from "primereact/column";

export default class MenuComponent extends Component{
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
                                    seafood: data.menuSeafoods,
                                    sides: data.menuSides});
            })
    }

    render(){
        const column = [
            {field: 'name', header: 'Name'},
            {field: 'description', header: 'Description'},
            {field: 'price', header: 'Price'}
        ];

        const dynamicColumns = column.map((col,i) => {
            return <Column key={col.field}
                           field={col.field}
                           header={col.header}
            />
        });

        return(

            <div>
                <MenuView appetizers={this.state.appetizers}
                          salads={this.state.salads}
                          pastas={this.state.pastas}
                          veals={this.state.veals}
                          beefs={this.state.beefs}
                          chickens={this.state.chickens}
                          seafoods={this.state.seafood}
                          sides={this.state.sides}
                          dynamicColumns={dynamicColumns} />
            </div>
        );
    }
}