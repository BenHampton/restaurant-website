package com.resturantapi.restaurantapi.repository;

import com.resturantapi.restaurantapi.model.cache.RedisFood;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
@Configuration
public interface RedisFoodRepository extends CrudRepository<RedisFood, String> {
}
