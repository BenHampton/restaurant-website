import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom/es/BrowserRouter";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path}
                              component={prop.component}
                              key={key} />;
            })}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
