package com.resturantapi.restaurantapi.controller;

import com.resturantapi.restaurantapi.model.Order;
import com.resturantapi.restaurantapi.service.FoodOrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FoodOrderController {

    //TODO new database for every order with userName_Unique-ID as name
    //TODO need ANOTHER database to hold food ""inventory""

    //TODO future login/signIn/signUp that retains previous database and that asks for a reorder -> IF NOT overrides that database for that signed in user

    private FoodOrderService foodOrderService;

    public FoodOrderController(FoodOrderService foodOrderService) {
        this.foodOrderService = foodOrderService;
    }

    @GetMapping("/food-order-responses")
    public ResponseEntity<Order> retrieveFoodOrder(){

        Order order = foodOrderService.retrieveFoodOrder();

        ResponseEntity responseEntity = new ResponseEntity(order, HttpStatus.OK);

        return responseEntity;
    }

}
