package com.resturantapi.restaurantapi.util;

import com.resturantapi.restaurantapi.model.CartItemRequest;
import com.resturantapi.restaurantapi.model.CartItemResponse;
import com.resturantapi.restaurantapi.model.Food;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

@Component
public class CartServiceUtil {

    private String OUT_OF_STOCK = "0";

    public CartItemResponse generateCartItemResponse(CartItemRequest cartItemRequest, Food food){

        CartItemResponse cartItemResponse = new CartItemResponse();

        if(StringUtils.equals(food.getQuantity(), OUT_OF_STOCK)){
            cartItemResponse.setOutOFStock(true);
        } else{
            if(food != null){
                cartItemResponse.setAddedToCart(true);
                cartItemResponse.setCartTotal(Double.toString(retrieveCartTotal(cartItemRequest, food)));
            }
        }

        return cartItemResponse;
    }

    private Double retrieveCartTotal(CartItemRequest cartItemRequest, Food food){

        double cartTotal = cartItemRequest.getItemsInCart()
                .stream()
                .mapToDouble( item -> Integer.parseInt(item.getPrice()))
                .sum();

        return cartTotal + Double.parseDouble(food.getPrice());
    }
}
