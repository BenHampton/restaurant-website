package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.model.Order;
import org.springframework.stereotype.Component;

@Component
public class FoodOrderService {

    //TODO temp Order -> has NOT been submitted YET so possible modifications likely

    public Order retrieveFoodOrder(){

        Order order = retrieveFoodOrderFromDataBase();

        return order;
    }

    public Order retrieveFoodOrderFromDataBase(){

        Order order = new Order();

        //TODO retrieve Food Order from FOOD db

        //TODO adjust FOOD db from Food Order

        return order;
    }
}
