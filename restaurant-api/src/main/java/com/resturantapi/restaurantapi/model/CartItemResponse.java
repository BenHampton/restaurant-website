package com.resturantapi.restaurantapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class CartItemResponse {

    private List<Food> food;

    private String cartTotal;

    private boolean errorMessage;

    private boolean isAddedToCart;

    private boolean isOutOFStock;
}
