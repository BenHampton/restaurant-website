package com.resturantapi.restaurantapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.annotation.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Food {

    public static final String VEAL = "Veal";
    public static final String CHICKEN = "Chicken";
    public static final String PASTA = "Pasta";
    public static final String SEAFOOD = "Seafood";
    public static final String SIDE = "Side";
    public static final String SALAD = "Salad";
    public static final String APPETIZER = "Appetizers";
    public static final String BEEF = "Beef";

    @Id
    private String id;

    private String entreeType;

    private String name;

    private String price;

    private String quantity;

    private String description;

    public boolean isAppetizer(){
        return StringUtils.equals(Food.APPETIZER, entreeType);
    }

    public boolean isSalad(){
        return StringUtils.equals(Food.SALAD, entreeType);
    }

    public boolean isSide(){
        return StringUtils.equals(Food.SIDE, entreeType);
    }

    public boolean isSeafood(){
        return StringUtils.equals(Food.SEAFOOD, entreeType);
    }

    public boolean isPasta(){
        return StringUtils.equals(Food.PASTA, entreeType);
    }

    public boolean isChicken(){
        return StringUtils.equals(Food.CHICKEN, entreeType);
    }

    public boolean isVeal(){
        return StringUtils.equals(Food.VEAL, entreeType);
    }

    public boolean isBeef(){
        return StringUtils.equals(Food.BEEF, entreeType);
    }
}
