package com.resturantapi.restaurantapi.model;

import lombok.Data;

import java.util.List;

@Data
public class Cart {

    private static List<Food> cart;

    public void addItemToCart(Food food){
        cart.add(food);
    }

}
