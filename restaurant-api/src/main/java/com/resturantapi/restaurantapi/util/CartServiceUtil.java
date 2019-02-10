package com.resturantapi.restaurantapi.util;

import com.resturantapi.restaurantapi.model.CartItemResponse;
import org.springframework.stereotype.Component;

@Component
public class CartServiceUtil {

    public String retrieveCartTotal(){

        String cartTotal = String.valueOf(CartItemResponse.retrieveAllItemsInCart()
                .stream()
                .mapToDouble( item -> Double.parseDouble(item.getPrice().replace("$","")))
                .sum());
        if (cartTotal.startsWith("$")){
            return cartTotal;
        } else {
            return "$".concat(cartTotal);
        }
    }
}
