package com.resturantapi.restaurantapi.util;

import com.resturantapi.restaurantapi.model.UpdateCartResponse;
import com.resturantapi.restaurantapi.model.cache.RedisCartResponse;
import com.resturantapi.restaurantapi.model.cache.RedisFood;
import org.springframework.stereotype.Component;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;

@Component
public class CartServiceUtil {

    public UpdateCartResponse generateUpdatedCarResponse(List<RedisFood> redisFoods, RedisFood redisFood){
        UpdateCartResponse updateCartResponse = new UpdateCartResponse();
        updateCartResponse.setName(redisFood.getName());
        updateCartResponse.setCartTotal(retrieveCartTotal(redisFoods));

        return updateCartResponse;
    }

    public RedisCartResponse generateRedisCartResponseResponse(List<RedisFood> redisFoods){

        RedisCartResponse redisCartResponse = new RedisCartResponse();
        redisCartResponse.getCart().addAll(redisFoods);
        redisCartResponse.setCartTotal(retrieveCartTotal(redisFoods));
        return redisCartResponse;
    }

    private String retrieveCartTotal(List<RedisFood> redisFoods){

        NumberFormat currencyFormatter = NumberFormat.getCurrencyInstance( new Locale("en", "US"));

        double cartTotal = redisFoods
                .stream()
                .mapToDouble( item -> Double.parseDouble(item.getPrice().replace("$","")))
                .sum();

            return currencyFormatter.format(cartTotal);
    }
}
