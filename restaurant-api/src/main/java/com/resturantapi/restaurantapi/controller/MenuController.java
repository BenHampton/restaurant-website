package com.resturantapi.restaurantapi.controller;

import com.resturantapi.restaurantapi.model.Food;
import com.resturantapi.restaurantapi.model.Menu;
import com.resturantapi.restaurantapi.service.MenuService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {

    private MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/food-on-menu-responses")
    public ResponseEntity<Menu> retrieveMenu(){

        Menu menu = menuService.retrieveMenu();

        ResponseEntity responseEntity = new ResponseEntity(menu, HttpStatus.OK);

        return responseEntity;
    }

    @PostMapping("/menu-add-foods")
    public void addFoodToMenu(@RequestBody List<Food> foods){

        menuService.addFoodToMenu(foods);
    }

}
