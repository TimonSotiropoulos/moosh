// *******************************************************
// Food.js
// -------------------------------------------------------
// All food constants used through-out the application
// -------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import React, { Component } from 'react';
import { Food } from '../components';
// ----------------------------------

// *******************************************
// Exports
// -------------------------------------------
export const KEYS = {
    APPLE: "APPLE",
    AVOCADO: "AVOCADO",
    BACON: "BACON",
    BANANA: "BANANA",
    BREAD: "BREAD",
    BROCCOLI: "BROCCOLI",
    CARROT: "CARROT",
    CEREAL: "CEREAL",
    CHEESE: "CHEESE",
    CHERRY: "CHERRY",
    CHIPS: "CHIPS",
    CHOCOBAR: "CHOCOBAR",
    CUPCAKE: "CUPCAKE",
    EGGS: "EGGS",
    GRAPE: "GRAPE",
    ICECREAM: "ICECREAM",
    JUICE: "JUICE",
    LETTUCE: "LETTUCE",
    MILK: "MILK",
    ORANGE: "ORANGE",
    PASTA: "PASTA",
    PINEAPPLE: "PINEAPPLE",
    POTATO: "POTATO",
    RICE: "RICE",
    ROLL: "ROLL",
    SODA: "SODA",
    STEAK: "STEAK",
    TOFU: "TOFU",
    TOMATO: "TOMATO",
    TUNA: "TUNA",
    WATER: "WATER",
    YOGHURT: "YOGHURT",
}

export const GET_ELEMENT = (itemKey, props) => {
    switch (itemKey) {
        case KEYS.APPLE:
            return <Food.Apple.Single {...props} />;
        case KEYS.AVOCADO:
            return <Food.Avocado.Single {...props} />;
        case KEYS.BACON:
            return <Food.Bacon.Single {...props} />;
        case KEYS.BANANA:
            return <Food.Banana.Single {...props} />;
        case KEYS.BREAD:
            return <Food.Bread.Single {...props} />;
        case KEYS.BROCCOLI:
            return <Food.Broccoli.Single {...props} />;
        case KEYS.CARROT:
            return <Food.Carrot.Single {...props} />;
        case KEYS.CEREAL:
            return <Food.Cereal.Single {...props} />;
        case KEYS.CHEESE:
            return <Food.Cheese.Single {...props} />;
        case KEYS.CHERRY:
            return <Food.Cherry.Single {...props} />;
        case KEYS.CHIPS:
            return <Food.Chips.Single {...props} />;
        case KEYS.CHOCOBAR:
            return <Food.Chocobar.Single {...props} />;
        case KEYS.CUPCAKE:
            return <Food.Cupcake.Single {...props} />;
        case KEYS.EGGS:
            return <Food.Eggs.Single {...props} />;
        case KEYS.GRAPE:
            return <Food.Grape.Single {...props} />;
        case KEYS.ICECREAM:
            return <Food.IceCream.Single {...props} />;
        case KEYS.JUICE:
            return <Food.Juice.Single {...props} />;
        case KEYS.LETTUCE:
            return <Food.Lettuce.Single {...props} />;
        case KEYS.MILK:
            return <Food.Milk.Single {...props} />;
        case KEYS.ORANGE:
            return <Food.Orange.Single {...props} />;
        case KEYS.PASTA:
            return <Food.Pasta.Single {...props} />;
        case KEYS.PINEAPPLE:
            return <Food.Pineapple.Single {...props} />;
        case KEYS.POTATO:
            return <Food.Potato.Single {...props} />;
        case KEYS.RICE:
            return <Food.Rice.Single {...props} />;
        case KEYS.ROLL:
            return <Food.Roll.Single {...props} />;
        case KEYS.SODA:
            return <Food.Soda.Single {...props} />;
        case KEYS.STEAK:
            return <Food.Steak.Single {...props} />;
        case KEYS.TOFU:
            return <Food.Tofu.Single {...props} />;
        case KEYS.TOMATO:
            return <Food.Tomato.Single {...props} />;
        case KEYS.TUNA:
            return <Food.Tuna.Single {...props} />;
        case KEYS.WATER:
            return <Food.Water.Single {...props} />;
        case KEYS.YOGHURT:
            return <Food.Yoghurt.Single {...props} />;
        default:
            return <Food.Yoghurt.Single {...props} />;
    }
}

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const TARGETS = {
    TROLLEY: "TROLLEY",
    BASKET: "BASKET",
    BLENDER: "BLENDER",
}

// ----------------------------------
