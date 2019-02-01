package com.resturantapi.restaurantapi.service;

import com.resturantapi.restaurantapi.config.RestaurantRepository;
import com.resturantapi.restaurantapi.model.Food;
import com.resturantapi.restaurantapi.model.Menu;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MenuService {

    private RestaurantRepository restaurantRepository;

    public MenuService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public Menu retrieveMenu() {

        Menu menu = new Menu();

        List<Food> foods = generateDollarSignOnFoodPrice(restaurantRepository.findAll());

        menu.getMenuAppetizers().addAll(foods.stream().filter( food -> food.isAppetizer()).collect(Collectors.toList()));
        menu.getMenuChickens().addAll(foods.stream().filter( food -> food.isChicken()).collect(Collectors.toList()));
        menu.getMenuPastas().addAll(foods.stream().filter( food -> food.isPasta()).collect(Collectors.toList()));
        menu.getMenuSalads().addAll(foods.stream().filter( food -> food.isSalad()).collect(Collectors.toList()));
        menu.getMenuSeafoods().addAll(foods.stream().filter(food -> food.isSeafood()).collect(Collectors.toList()));
        menu.getMenuSides().addAll(foods.stream().filter( food -> food.isSide()).collect(Collectors.toList()));
        menu.getMenuVeals().addAll(foods.stream().filter(food -> food.isVeal()).collect(Collectors.toList()));
        menu.getMenuBeefs().addAll(foods.stream().filter( food -> food.isBeef()).collect(Collectors.toList()));

        return menu;
    }

    private List<Food> generateDollarSignOnFoodPrice(List<Food> foods){
        foods.forEach( food -> {
            if(!food.getPrice().startsWith("$")){
                food.setPrice("$".concat(food.getPrice()));
            }
        });
        return foods;
    }

    public void addFoodToMenu(List<Food> foods){

        restaurantRepository.saveAll(foods);

    }
}
