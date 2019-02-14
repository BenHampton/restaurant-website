package com.resturantapi.restaurantapi.model.cache;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.NumberFormat;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RedisCartResponse {

    private List<RedisFood> cart = new ArrayList<>();

    @NumberFormat(pattern = "#,###,###.##")
    private String cartTotal;

    private boolean isErrorMessage;

}
