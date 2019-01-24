package com.resturantapi.restaurantapi.model;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Order {

    List<Food> foodOrder = new ArrayList<>();

    private boolean sendToKitchen;

    private boolean isToGo;



}
