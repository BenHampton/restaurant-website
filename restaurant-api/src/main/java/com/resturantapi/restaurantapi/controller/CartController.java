package com.resturantapi.restaurantapi.controller;

import com.resturantapi.restaurantapi.model.AddedCartItemResponse;
import com.resturantapi.restaurantapi.model.Food;
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
    @ResponseBody
    public ResponseEntity<AddedCartItemResponse> putItemInCart(@RequestBody Food food){

        AddedCartItemResponse addedCartItemResponse = cartService.putItemInCart(food);

        ResponseEntity responseEntity = new ResponseEntity(addedCartItemResponse, HttpStatus.OK);

        return responseEntity;
    }
}
