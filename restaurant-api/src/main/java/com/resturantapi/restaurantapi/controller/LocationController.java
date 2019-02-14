package com.resturantapi.restaurantapi.controller;

import com.resturantapi.restaurantapi.model.RestaurantDetailsResponse;
import com.resturantapi.restaurantapi.service.LocationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LocationController {

    private LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("/restaurant-details")
    public ResponseEntity<RestaurantDetailsResponse> retrieveRestaurantDetails(){
        RestaurantDetailsResponse restaurantDetailsResponse = locationService.generateRestaurantDetailsResponse();
        return new ResponseEntity<>(restaurantDetailsResponse, HttpStatus.OK);
    }

//    @GetMapping("/today-restaurants-hours")
//    public ResponseEntity<RestaurantDetailsResponse> retrieveRestaurantDetails(){
//        RestaurantDetailsResponse restaurantDetailsResponse = locationService.generateRestaurantDetailsResponse();
//    }
}
