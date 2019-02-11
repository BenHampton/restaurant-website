package com.resturantapi.restaurantapi.util.cache;

import com.resturantapi.restaurantapi.repository.RedisFoodRepository;
import com.resturantapi.restaurantapi.model.cache.RedisFood;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CartServiceCacheUtil {

    private RedisFoodRepository redisFoodRepository;

    public CartServiceCacheUtil(RedisFoodRepository redisFoodRepository) {
        this.redisFoodRepository = redisFoodRepository;
    }

    public List<RedisFood> retrieveAllItemsInCartFromCache(){
       List<RedisFood> redisFoods = new ArrayList<>();
       redisFoodRepository.findAll()
               .forEach(food -> redisFoods.add(food));

       return redisFoods;
    }
}
