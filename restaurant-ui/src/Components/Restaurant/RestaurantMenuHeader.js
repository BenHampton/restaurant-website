import React from 'react';

export const RestaurantMenuHeader = props => {
    return(
        <div className={'p-grid'}>
            <div className={'p-col'}>
                <h2>Name</h2>
            </div>
            <div className={'p-col'}>
                <h2>Description</h2>
            </div>
            <div className={'p-col'}>
                <h2>Price</h2>
            </div>
            <div className={'p-col'}>
                <h2>Add Item To Cart</h2>
            </div>
        </div>
    )
};