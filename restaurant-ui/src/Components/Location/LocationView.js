import React from 'react';
import './css/locationView.css'

const LocationView = props => {
    return(
        <div className={'location-and-hours-container'}>
            <h2 className={'location-hours-header'}>HOURS & LOCATION</h2>
            <div className={'location-hours-text'}>
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