package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.config.RestaurantRepository;
import com.resturantapi.restaurantapi.model.*;
import com.resturantapi.restaurantapi.util.CartServiceUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class CartService {


    private RestaurantRepository restaurantRepository;

    private CartServiceUtil cartServiceUtil;

    public CartService(RestaurantRepository restaurantRepository,
                       CartServiceUtil cartServiceUtil) {
        this.restaurantRepository = restaurantRepository;
        this.cartServiceUtil = cartServiceUtil;
    }

    public AddedCartItemResponse putItemInCart(Food food){

        CartItemResponse.addItemToCart(food);

        AddedCartItemResponse addedCartItemResponse = retrieveCartTotal(food);

        return addedCartItemResponse;
    }

    public AddedCartItemResponse retrieveCartTotal(Food food){

        AddedCartItemResponse addedCartItemResponse = new AddedCartItemResponse();

        addedCartItemResponse.setItemName(food.getName());

        addedCartItemResponse.setCartTotal(cartServiceUtil.retrieveCartTotal());

        return addedCartItemResponse;
    }
}
