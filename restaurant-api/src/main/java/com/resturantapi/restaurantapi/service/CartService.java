package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.repository.RedisFoodRepository;
import com.resturantapi.restaurantapi.model.AddedCartItemResponse;
import com.resturantapi.restaurantapi.model.cache.RedisFood;
import com.resturantapi.restaurantapi.util.CartServiceUtil;
import com.resturantapi.restaurantapi.util.cache.CartServiceCacheUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

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

    public AddedCartItemResponse retrieveAddedCartItemResponse(RedisFood redisFood){

        redisFoodRepository.save(redisFood);

        AddedCartItemResponse addedCartItemResponse =
                cartServiceUtil.generateAddedCartItemResponse(cartServiceCacheUtil.retrieveAllItemsInCartFromCache(), redisFood);

        return addedCartItemResponse;
    }

}
