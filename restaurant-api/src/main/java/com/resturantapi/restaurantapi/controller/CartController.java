package com.resturantapi.restaurantapi.controller;

import com.resturantapi.restaurantapi.model.CartItemRequest;
import com.resturantapi.restaurantapi.model.CartItemResponse;
import com.resturantapi.restaurantapi.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    private CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

//    @GetMapping("/food-order-cart-responses")
//    public ResponseEntity<CartItemRequest> generateCartResponse(@RequestBody CartItemRequest cartRequest){
//
//        CartItemResponse cartResponse = cartService.retrieveCartItems(cartRequest);
//
//        ResponseEntity responseEntity = new ResponseEntity(cartRequest, HttpStatus.OK);
//
//        return responseEntity;
//    }

    @PostMapping("/cart-add-item-request")
    public ResponseEntity<CartItemRequest> putItemInCart(@RequestBody CartItemRequest cartItemRequest){

        CartItemResponse cartItemResponse = cartService.putItemInCart(cartItemRequest);

        ResponseEntity responseEntity = new ResponseEntity(cartItemResponse, HttpStatus.OK);

        return responseEntity;
    }
}
