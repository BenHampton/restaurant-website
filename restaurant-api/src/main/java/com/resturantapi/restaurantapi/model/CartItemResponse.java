package com.resturantapi.restaurantapi.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;

import java.util.List;

@Data
@NoArgsConstructor
public class CartItemResponse {

    private static List<Food> cartItems;

    private static  String cartTotal;

    private boolean errorMessage;

    private boolean isAddedToCart;

    private boolean isOutOFStock;

    public static void addItemToCart(Food food){
        cartItems.add(food);
    }

    public static List<Food> retrieveAllItemsInCart(){
        return cartItems;
    }
}
