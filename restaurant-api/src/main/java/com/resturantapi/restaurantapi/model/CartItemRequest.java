package com.resturantapi.restaurantapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class CartItemRequest {

    private List<Food> itemsInCart = new ArrayList<>();

    private Food food;

    private String additionalComment;

}
