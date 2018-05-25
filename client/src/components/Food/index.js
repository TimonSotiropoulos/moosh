// *******************************************************
// Food Export File
// -------------------------------------------------------
// All the Food Items from across the app
// -------------------------------------------
import React from 'react';
import { FOOD } from '../../constants';

// *******************************************
// Component Imports
// -------------------------------------------
import * as Eggs_ from './Eggs';
import * as Cereal_ from './Cereal';
import * as Juice_ from './Juice';
import * as Rice_ from './Rice';
import * as Soda_ from './Soda';
import * as Tuna_ from './Tuna';
import * as ChocoBar_ from './ChocoBar';
import * as Cupcake_ from './Cupcake';
import * as Chips_ from './Chips';
import * as Roll_ from './Roll';
import * as Pasta_ from './Pasta';
import * as Bread_ from './Bread';
import * as Tofu_ from './Tofu';
import * as Steak_ from './Steak';
import * as Bacon_ from './Bacon';
import * as Milk_ from './Milk';
import * as Yoghurt_ from './Yoghurt';
import * as Cheese_ from './Cheese';
import * as IceCream_ from './IceCream';
import * as Apple_ from './Apple';
import * as Orange_ from './Orange';
import * as Tomato_ from './Tomato';
import * as Potato_ from './Potato';
import * as Grape_ from './Grape';
import * as Banana_ from './Banana';
import * as Cherry_ from './Cherry';
import * as Avocado_ from './Avocado';
import * as Pineapple_ from './Pineapple';
import * as Broccoli_ from './Broccoli';
import * as Carrot_ from './Carrot';
import * as Lettuce_ from './Lettuce';
import * as Water_ from './Water';
// --------------------------------

// *******************************************
// Exports
// -------------------------------------------
export const Apple = Apple_;
export const Avocado = Avocado_;
export const Bacon = Bacon_;
export const Banana = Banana_;
export const Bread = Bread_;
export const Broccoli = Broccoli_;
export const Carrot = Carrot_;
export const Cereal = Cereal_;
export const Cheese = Cheese_;
export const Cherry = Cherry_;
export const Chips = Chips_;
export const ChocoBar = ChocoBar_;
export const Cupcake = Cupcake_;
export const Eggs = Eggs_;
export const Grape = Grape_;
export const IceCream = IceCream_;
export const Juice = Juice_;
export const Lettuce = Lettuce_;
export const Milk = Milk_;
export const Orange = Orange_;
export const Pasta = Pasta_;
export const Pineapple = Pineapple_;
export const Potato = Potato_;
export const Rice = Rice_;
export const Roll = Roll_;
export const Soda = Soda_;
export const Steak = Steak_;
export const Tofu = Tofu_;
export const Tomato = Tomato_;
export const Tuna = Tuna_;
export const Water = Water_;
export const Yoghurt = Yoghurt_;

export const GET_ELEMENT = (itemKey, props) => {
    switch (itemKey) {
        case FOOD.KEYS.APPLE:
            return <Apple.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.AVOCADO:
            return <Avocado.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BACON:
            return <Bacon.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BANANA:
            return <Banana.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BREAD:
            return <Bread.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BROCCOLI:
            return <Broccoli.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CARROT:
            return <Carrot.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CEREAL:
            return <Cereal.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHEESE:
            return <Cheese.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHERRY:
            return <Cherry.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHIPS:
            return <Chips.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHOCOBAR:
            return <ChocoBar.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CUPCAKE:
            return <Cupcake.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.EGGS:
            return <Eggs.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.GRAPE:
            return <Grape.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.ICECREAM:
            return <IceCream.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.JUICE:
            return <Juice.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.LETTUCE:
            return <Lettuce.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.MILK:
            return <Milk.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.ORANGE:
            return <Orange.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.PASTA:
            return <Pasta.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.PINEAPPLE:
            return <Pineapple.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.POTATO:
            return <Potato.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.RICE:
            return <Rice.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.ROLL:
            return <Roll.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.SODA:
            return <Soda.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.STEAK:
            return <Steak.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.TOFU:
            return <Tofu.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.TOMATO:
            return <Tomato.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.TUNA:
            return <Tuna.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.WATER:
            return <Water.Single itemKey={itemKey} {...props} />;
        case FOOD.KEYS.YOGHURT:
            return <Yoghurt.Single itemKey={itemKey} {...props} />;
        default:
            return <Yoghurt.Single itemKey={itemKey} {...props} />;
    }
}

export const GET_STOCK_ELEMENT = (itemKey, props) => {
    switch (itemKey) {
        case FOOD.KEYS.APPLE:
            return <Apple.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.AVOCADO:
            return <Avocado.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BACON:
            return <Bacon.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BANANA:
            return <Banana.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BREAD:
            return <Bread.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.BROCCOLI:
            return <Broccoli.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CARROT:
            return <Carrot.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CEREAL:
            return <Cereal.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHEESE:
            return <Cheese.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHERRY:
            return <Cherry.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHIPS:
            return <Chips.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CHOCOBAR:
            return <ChocoBar.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.CUPCAKE:
            return <Cupcake.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.EGGS:
            return <Eggs.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.GRAPE:
            return <Grape.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.ICECREAM:
            return <IceCream.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.JUICE:
            return <Juice.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.LETTUCE:
            return <Lettuce.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.MILK:
            return <Milk.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.ORANGE:
            return <Orange.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.PASTA:
            return <Pasta.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.PINEAPPLE:
            return <Pineapple.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.POTATO:
            return <Potato.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.RICE:
            return <Rice.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.ROLL:
            return <Roll.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.SODA:
            return <Soda.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.STEAK:
            return <Steak.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.TOFU:
            return <Tofu.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.TOMATO:
            return <Tomato.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.TUNA:
            return <Tuna.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.WATER:
            return <Water.Stock itemKey={itemKey} {...props} />;
        case FOOD.KEYS.YOGHURT:
            return <Yoghurt.Stock itemKey={itemKey} {...props} />;
        default:
            return <Yoghurt.Stock itemKey={itemKey} {...props} />;
    }
}

// --------------------------------
