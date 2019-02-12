package com.resturantapi.restaurantapi.model;

import lombok.Data;

@Data
public class AddedCartItemResponse {

    private String name;

    private String cartTotal;

    private boolean errorMessage;
}
