package com.resturantapi.restaurantapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Menu {

    private List<Food> menuSalads = new ArrayList<>();
    private List<Food> menuPastas = new ArrayList<>();
    private List<Food> menuBeefs = new ArrayList<>();
    private List<Food> menuChickens = new ArrayList<>();
    private List<Food> menuAppetizers = new ArrayList<>();
    private List<Food> menuSides = new ArrayList<>();
    private List<Food> menuSeafood = new ArrayList<>();
    private List<Food> menuVeal = new ArrayList<>();

}
