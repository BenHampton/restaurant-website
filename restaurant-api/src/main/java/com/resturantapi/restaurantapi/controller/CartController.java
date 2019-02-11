package com.resturantapi.restaurantapi.controller;

import com.resturantapi.restaurantapi.model.AddedCartItemResponse;
import com.resturantapi.restaurantapi.model.cache.RedisFood;
import com.resturantapi.restaurantapi.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    private CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    //TODO
    // 1. add to cart put item in cart & return the items name with cart total(growl)
    // 2. update cart & return item updated and cart total(growl)
    // 3. delete from cart & return item deleted and cart total (growl)

    @PostMapping("/cart-add-item-request")
    @ResponseBody
    public ResponseEntity<AddedCartItemResponse> putItemInCart(@RequestBody RedisFood redisFood){

        AddedCartItemResponse addedCartItemResponse = cartService.retrieveAddedCartItemResponse(redisFood);

        ResponseEntity responseEntity = new ResponseEntity(addedCartItemResponse, HttpStatus.OK);

        return responseEntity;
    }


}
