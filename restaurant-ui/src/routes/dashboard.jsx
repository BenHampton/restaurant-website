import App from "../Components/HomePage/App";
import RestaurantComponent from "../Components/Restaurant/RestaurantComponent";

const dashboardRoutes = [

    {
        path: '/home',
        name: 'Home',
        hide: 'false',
        component: App
    },
    {
        path: '/menu',
        name: 'Menu',
        hide: false,
        component: RestaurantComponent
    },
    { redirect: true,
      path: '/',
      to: '/home',
      name: 'Home'
    }

];
export default dashboardRoutes;