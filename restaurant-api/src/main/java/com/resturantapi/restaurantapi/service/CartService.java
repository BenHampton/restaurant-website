package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.config.RestaurantRepository;
import com.resturantapi.restaurantapi.model.CartItemRequest;
import com.resturantapi.restaurantapi.model.CartItemResponse;
import com.resturantapi.restaurantapi.model.Food;
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

    public CartItemResponse putItemInCart(CartItemRequest cartItemRequest){

        CartItemResponse cartItemResponse = retrieveItemFromCart(cartItemRequest);

        return cartItemResponse;
    }

    public CartItemResponse retrieveItemFromCart(CartItemRequest cartItemRequest){

        CartItemResponse cartItemResponse = new CartItemResponse();

        try {

            Food food = restaurantRepository.findByName(cartItemRequest.getFood().getName());

            cartItemResponse = cartServiceUtil.generateCartItemResponse(cartItemRequest, food);

        } catch (Exception e){
            log.info("Error occurred in putItemInCart when trying to retrieveItemFromCart: " + e.getMessage());
            cartItemResponse.setErrorMessage(true);
        }

        return cartItemResponse;
    }
}
