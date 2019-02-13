package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.model.UpdateCartResponse;
import com.resturantapi.restaurantapi.model.cache.RedisCartResponse;
import com.resturantapi.restaurantapi.model.cache.RedisFood;
import com.resturantapi.restaurantapi.repository.RedisFoodRepository;
import com.resturantapi.restaurantapi.util.CartServiceUtil;
import com.resturantapi.restaurantapi.util.cache.CartServiceCacheUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Component
@Slf4j
public class CartService {

    private CartServiceUtil cartServiceUtil;

    private CartServiceCacheUtil cartServiceCacheUtil;

    private RedisFoodRepository redisFoodRepository;

    public CartService(CartServiceUtil cartServiceUtil,
                       CartServiceCacheUtil cartServiceCacheUtil,
                       RedisFoodRepository redisFoodRepository) {
        this.cartServiceUtil = cartServiceUtil;
        this.cartServiceCacheUtil = cartServiceCacheUtil;
        this.redisFoodRepository = redisFoodRepository;
    }

    public UpdateCartResponse retrieveAddedItemToCart(RedisFood redisFood){

        redisFoodRepository.save(redisFood);

        return retrieveUpdateCartResponse(redisFood);
    }

    public UpdateCartResponse retrieveRemovedItemFromCart(RedisFood redisFood){

        redisFoodRepository.deleteById(redisFood.getId());

        return retrieveUpdateCartResponse(redisFood);

    }

    public RedisCartResponse retrieveAllItemsInCart(){

        List<RedisFood> redisFoods = new ArrayList<>();

        RedisCartResponse redisCartResponse = new RedisCartResponse(redisFoods, "$0.00", false);

        redisFoods = cartServiceCacheUtil.retrieveAllItemsInCartFromCache();

        if (CollectionUtils.isEmpty(redisFoods)){
            return redisCartResponse;
        } else {
            redisCartResponse = cartServiceUtil.generateRedisCartResponseResponse(redisFoods);
        }

        return redisCartResponse;
    }



    private UpdateCartResponse retrieveUpdateCartResponse(RedisFood redisFood){
        UpdateCartResponse updateCartResponse =
                cartServiceUtil.generateUpdatedCarResponse(cartServiceCacheUtil.retrieveAllItemsInCartFromCache(), redisFood);
        return updateCartResponse;
    }

}
