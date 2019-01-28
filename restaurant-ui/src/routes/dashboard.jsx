import App from "../Components/HomePage/App";
import MenuComponent from "../Components/Menu/MenuComponent";

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
        component: MenuComponent
    },
    { redirect: true,
      path: '/',
      to: '/home',
      name: 'Home'
    }

];
export default dashboardRoutes;