import React from 'react';

import './css/menuView.css';
import {Button} from "primereact/button";


const MenuView = props => {

    return(
        <div className={'p-grid'}>
            <div className={'p-col menu-item'}>
                {props.food.name}
            </div>
            <div className={'p-col menu-item'}>
                {props.food.description}
            </div>
            <div className={'p-col menu-item'}>
                {props.food.price}
            </div>
            <div className={'p-col menu-item'}>
                <Button label={'Add To Cart'}
                        onClick={props.addToCart} />
            </div>
        </div>
    )
};

export default MenuView;