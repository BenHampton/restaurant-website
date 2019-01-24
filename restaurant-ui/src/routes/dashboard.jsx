import App from "../Components/App";

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