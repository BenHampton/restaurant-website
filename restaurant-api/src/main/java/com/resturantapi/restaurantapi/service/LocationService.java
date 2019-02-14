package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.model.RestaurantDetailsResponse;
import org.springframework.stereotype.Component;

@Component
public class LocationService {

    public RestaurantDetailsResponse generateRestaurantDetailsResponse() {
        RestaurantDetailsResponse restaurantDetailsResponse = new RestaurantDetailsResponse();
        restaurantDetailsResponse.setAddress(RestaurantDetailsResponse.ADDRESS);
        restaurantDetailsResponse.setZipCode(RestaurantDetailsResponse.ZIP_CODE);
        restaurantDetailsResponse.setState(RestaurantDetailsResponse.STATE);
        restaurantDetailsResponse.setCity(RestaurantDetailsResponse.CITY);
        restaurantDetailsResponse.setPhoneNumber(RestaurantDetailsResponse.PHONE_NUMBER);
        restaurantDetailsResponse.setWeekDayLunchHours(RestaurantDetailsResponse.WEEKDAY_LUNCH_HOURS);
        restaurantDetailsResponse.setWeekdayDinnerHours(RestaurantDetailsResponse.WEEKDAY_DINNER_HOURS);
        restaurantDetailsResponse.setWeekendDinnerHours(RestaurantDetailsResponse.WEEKEND_DINNER_HOURS);
        return restaurantDetailsResponse;
    }

}
