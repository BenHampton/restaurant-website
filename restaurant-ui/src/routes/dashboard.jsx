import App from "../Components/HomePage/App";

const dashboardRoutes = [

    {
        path: '/home',
        name: 'Home',
        hide: 'false',
        component: App
    },
    { redirect: true,
      path: '/',
      to: '/home',
      name: 'Home'
    }

];
export default dashboardRoutes;