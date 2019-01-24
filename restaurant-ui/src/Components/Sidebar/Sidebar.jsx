import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './css/sidebard.css';

import dashboardRoutes from "../../routes/dashboard.jsx";
import * as ReactDOM from "react-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentDidUpdate(){
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div id="sidebar" className="sidebar" >
        <div className={''}>
          <ul className={'nav-top'}>
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li className={ prop.upgrade ? "active active-pro" : this.activeRoute(prop.path) } key={key} >
                      <NavLink to={prop.path} className={prop.hide ? "nav-link navLink-hoverBox sidebar-hide" : "nav-link navLink-hoverBox"} activeClassName="active" >
                        <i className={prop.icon} />
                        <p>{prop.name}</p>
                      </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
