import React, {Component} from 'react';
import axios from 'axios';
import LocationView from "./LocationView";

export default class LocationComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            address: '',
            zipCode: '',
            state: '',
            city: '',
            phoneNumber: '',
            weekDayLunchHours: '',
            weekDayDinnerHours: '',
            weekendDinnerHours: ''
        }
        ;

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restaurant-details')
            .then(response => response.data)
            .then(data => {
                this.setState({address: data.address,
                                    zipCode: data.zipCode,
                                    state: data.state,
                                    city: data.city,
                                    phoneNumber: data.phoneNumber,
                                    weekDayLunchHours: data.weekDayLunchHours,
                                    weekDayDinnerHours: data.weekDayDinnerHours,
                                    weekendDinnerHours: data.weekendDinnerHours
                });
            })
    }

    render(){
        return(
            <LocationView address={this.state.address}
                          zipCode={this.state.zipCode}
                          state={this.state.state}
                          city={this.state.city}
                          phoneNumber={this.state.phoneNumber}
                          weekDayLunchHours={this.state.weekDayLunchHours}
                          weekDayDinnerHours={this.state.weekDayDinnerHours}
                          weekendDinnerHours={this.state.weekendDinnerHours} />
        );
    };
};