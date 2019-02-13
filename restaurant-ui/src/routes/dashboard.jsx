import App from "../Components/HomePage/App";
import RestaurantComponent from "../Components/Restaurant/RestaurantComponent";
import React from "react";
import image from '../resources/images/ttSideBar.jpg';
import CartInfoComponent from "../Components/Cart/CartInfoComponent";

const dashboardRoutes = [
    {
        path: '/pic',
        name: <img src={image} style={{ height: '25px', width: '25x'}}/>,
        hide: false
    },
    {
        path: '/home',
        name: 'Home',
        hide: false,
        component: App
    },
    {
        path: '/menu',
        name: 'Menu',
        hide: false,
        component: RestaurantComponent
    },
    {
      path: '/cart',
      name: 'View Cart',
      hide: false,
      component: CartInfoComponent
    },

    { redirect: true,
      path: '/',
      to: '/home',
      name: 'Home'
    }

];
export default dashboardRoutes;