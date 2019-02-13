package com.resturantapi.restaurantapi.model;

import lombok.Data;

@Data
public class UpdateCartResponse {

    private String id;

    private String name;

    private String cartTotal;

    private boolean errorMessage;
}
