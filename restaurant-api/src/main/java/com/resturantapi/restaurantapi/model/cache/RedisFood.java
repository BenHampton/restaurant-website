package com.resturantapi.restaurantapi.model.cache;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Data
@RedisHash("redisFood")
public class RedisFood {

    @Id
    private String id;

    private String name;

    private String price;

    private String quantity;

    private String additionalComments;
}
