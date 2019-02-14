import React from 'react';
import MenuComponent from "../Menu/MenuComponent";
import {RestaurantMenuHeader} from "./RestaurantMenuHeader";
const RestaurantView = props => {

    let appetizerItems = [];
    let saladItems = [];
    let pastaItems = [];
    let vealItems = [];
    let beefItems = [];
    let chickenItems = [];
    let seafoodItems = [];
    let sideItems = [];

    if (appetizerItems !== null ){
        props.appetizers.map((food, key) => {
            appetizerItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (saladItems !== null ){
        props.salads.map((food, key) => {
            saladItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (pastaItems !== null ){
        props.pastas.map((food, key) => {
            pastaItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (vealItems !== null ){
        props.veals.map((food, key) => {
            vealItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (beefItems !== null ){
        props.beefs.map((food, key) => {
            beefItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (chickenItems !== null ){
        props.chickens.map((food, key) => {
            chickenItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (seafoodItems !== null ){
        props.seafoods.map((food, key) => {
            seafoodItems.push(<MenuComponent food={food} key={key}/>)
        });
    }
    if (sideItems !== null ){
        props.sides.map((food, key) => {
            sideItems.push(<MenuComponent food={food} key={key}/>)
        });
    }

    return(

        <div className={'restaurant-container'}>
            <div className={'surf-n-turf'}></div>
            <div className={'menu-selection-first'}>
                <h1>Appetizers</h1>
                <RestaurantMenuHeader />
                {appetizerItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Salads</h1>
                <RestaurantMenuHeader />
                {saladItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Pastas</h1>
                <RestaurantMenuHeader />
                {pastaItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Veals</h1>
                <RestaurantMenuHeader />
                {vealItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Beef</h1>
                <RestaurantMenuHeader />
                {beefItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Chicken</h1>
                <RestaurantMenuHeader />
                {chickenItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Beef</h1>
                <RestaurantMenuHeader />
                {seafoodItems}
            </div>
            <div className={'menu-selection'}>
                <h1>Seafood</h1>
                <RestaurantMenuHeader />
                {sideItems}
            </div>
        </div>
    )
};

export default RestaurantView;