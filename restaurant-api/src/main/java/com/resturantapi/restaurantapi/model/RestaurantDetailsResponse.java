package com.resturantapi.restaurantapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RestaurantDetailsResponse {

    public static final String ADDRESS = "11686 Gravois Rd";
    public static final String ZIP_CODE = "63126";
    public static final String STATE = "MO";
    public static final String CITY = "St. Louis";
    public static final String PHONE_NUMBER = "(314) 849-1499";
    public static final String WEEKDAY_LUNCH_HOURS = "11AM - 2PM";
    public static final String WEEKDAY_DINNER_HOURS = "5PM - 9PM";
    public static final String WEEKEND_DINNER_HOURS = "5PM - 10PM";
    public static final String CLOSED = "Closed";

    private String address;

    private String zipCode;

    private String state;

    private String city;

    private String phoneNumber;

    private String weekDayLunchHours;

    private String weekdayDinnerHours;

    private String weekendDinnerHours;
}
