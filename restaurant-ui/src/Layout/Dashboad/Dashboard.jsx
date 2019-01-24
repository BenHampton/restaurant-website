import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Sidebar from "../../Components/Sidebar/Sidebar";

import dashboardRoutes from "../../routes/dashboard.jsx";

class Dashboard extends Component{
    constructor(props){
        super(props);

    };

    render(){
        return(
            <div className="p-grid p-nogutter" style={{background: 'black'}}>
                <div className={'p-col-12'} >
                    <Sidebar {...this.props}/>
                </div>
                <div className={'p-grid p-col-12 p-nogutter p-align-stretch vertical-container'} style={{background: 'black'}}>
                    <div className={'p-col-12'}>
                        <Switch>
                            {dashboardRoutes.map((prop, key) => {
                                if (prop.name === "/movie" || prop.name === "/tv-show" || prop.name === "/now-playing-movie") {
                                    return (
                                        <Route
                                            path={prop.path}
                                            key={key}
                                            render={routeProps => (
                                                <prop.component
                                                    {...routeProps}
                                                />
                                            )}
                                        />
                                    );
                                } else if (prop.redirect) {
                                    return <Redirect from={prop.path} to={prop.to} key={key}/>;
                                }
                                return (
                                    <Route path={prop.path} component={prop.component} key={key}/>
                                );
                            })}
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;