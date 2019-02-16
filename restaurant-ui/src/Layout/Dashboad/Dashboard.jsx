import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import dashboardRoutes from "../../routes/dashboard.jsx";

import '../../../node_modules/primeicons/fonts/primeicons.svg';
import '../../../node_modules/primereact/resources/primereact.css';
import '../../../node_modules/primeicons/primeicons.css';
import '../../../node_modules/primeflex/primeflex.css';

import '../../Components/Restaurant/css/restaurantView.css';
import  './css/dashboard.css';
import CopyRightsView from "../../Components/CopyRights/CopyRightsView";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled: false
        }
    };

    componentDidMount() {
      window.addEventListener('scroll', () => {
          console.log("ion")
          const isTop = window.scrollY < 100;
          if (isTop !== true){
              this.setState({ scrolled: true });
          } else {
              this.setState({ scrolled: false });
          }
      });
    };

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    render(){
        return(
            <div className="p-grid p-nogutter">
                <div className={'p-col-12 address'}>
                    11686 Gravois Rd, St. Louis, MO 63126  (314) 849-1499
                </div>
                <div className={'p-col-12'} >
                    <Sidebar {...this.props} scrolled={this.state.scrolled}/>
                </div>
                <div className={'p-grid p-col-12 p-nogutter p-align-stretch vertical-container box-container'}>
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
                <div className={'p-col'}>
                    <Footer />
                </div>
                <div className={'p-col'}>
                    <CopyRightsView />
                </div>
            </div>
        );
    }
}
export default Dashboard;