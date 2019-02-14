import React from 'react';
import './css/locationView.css'

const LocationView = props => {
    return(
        <div>
            <div></div>
            <div className={'location-and-hours'}>
                <h2>HOURS & LOCATION</h2>
                <div>{props.address}</div>
                <div>{props.state}, {props.zipCode}</div>
                <div>{props.phoneNumber}</div>
                <br />
                <div>Tuesday - Friday / {props.weekDayLunchHours}</div>
                <div>Monday - Thursday / {props.weekendDinnerHours}</div>
                <div>Friday & Saturday / {props.weekendDinnerHours}</div>
            </div>
        </div>
    );
};
export default LocationView;