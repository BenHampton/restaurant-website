package com.resturantapi.restaurantapi.util;

import com.resturantapi.restaurantapi.model.AddedCartItemResponse;
import com.resturantapi.restaurantapi.model.cache.RedisFood;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CartServiceUtil {

    public AddedCartItemResponse generateAddedCartItemResponse(List<RedisFood> redisFoods, RedisFood redisFood){
        AddedCartItemResponse addedCartItemResponse = new AddedCartItemResponse();
        addedCartItemResponse.setName(redisFood.getName());
        addedCartItemResponse.setCartTotal(retrieveCartTotal(redisFoods));

        return addedCartItemResponse;
    }

    private String retrieveCartTotal(List<RedisFood> redisFoods){

        String cartTotal = String.valueOf(redisFoods
                .stream()
                .mapToDouble( item -> Double.parseDouble(item.getPrice().replace("$","")))
                .sum());

            return "$".concat(cartTotal);

    }
}
