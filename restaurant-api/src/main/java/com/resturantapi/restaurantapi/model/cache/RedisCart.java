package com.resturantapi.restaurantapi.model.cache;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class RedisCart {

    private List<RedisFood> cart = new ArrayList<>();

    private String cartTotal;

}
