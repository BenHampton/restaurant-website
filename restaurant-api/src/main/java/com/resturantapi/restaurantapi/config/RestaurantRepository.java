package com.resturantapi.restaurantapi.config;

import com.resturantapi.restaurantapi.model.Food;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.MongoRepository;

@Configuration
public interface RestaurantRepository extends MongoRepository<Food, String> {

    Food findByName(String entreeName);
}
