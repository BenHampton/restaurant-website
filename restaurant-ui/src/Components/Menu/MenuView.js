import React from 'react';
import {DataTable} from "primereact/datatable";

import './css/menuView.css';


const MenuView = (props) => {

    return(
        <div className={'menu-container'}>
            <h1 className={'title'}>MENU</h1>
            <div>
                <DataTable value={props.appetizers}
                           header={'Appetizers'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.salads}
                           header={'Salad'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.pastas}
                           header={'Pasta'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.veals}
                           header={'Veal'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.beefs}
                           header={'Beef'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.chickens}
                           header={'Chicken'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.seafoods}
                           header={'Seafood'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>
            <div className={'table-group'}>
                <DataTable value={props.sides}
                           header={'Sides'}
                           className={'table-text'}>
                    {props.dynamicColumns}
                </DataTable>
            </div>


        </div>
    )
};

export default MenuView;