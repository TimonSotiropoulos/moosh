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
import { Fill } from '../styles';
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
            return <Food.Apple.Single itemKey={itemKey} {...props} />;
        case KEYS.AVOCADO:
            return <Food.Avocado.Single itemKey={itemKey} {...props} />;
        case KEYS.BACON:
            return <Food.Bacon.Single itemKey={itemKey} {...props} />;
        case KEYS.BANANA:
            return <Food.Banana.Single itemKey={itemKey} {...props} />;
        case KEYS.BREAD:
            return <Food.Bread.Single itemKey={itemKey} {...props} />;
        case KEYS.BROCCOLI:
            return <Food.Broccoli.Single itemKey={itemKey} {...props} />;
        case KEYS.CARROT:
            return <Food.Carrot.Single itemKey={itemKey} {...props} />;
        case KEYS.CEREAL:
            return <Food.Cereal.Single itemKey={itemKey} {...props} />;
        case KEYS.CHEESE:
            return <Food.Cheese.Single itemKey={itemKey} {...props} />;
        case KEYS.CHERRY:
            return <Food.Cherry.Single itemKey={itemKey} {...props} />;
        case KEYS.CHIPS:
            return <Food.Chips.Single itemKey={itemKey} {...props} />;
        case KEYS.CHOCOBAR:
            return <Food.ChocoBar.Single itemKey={itemKey} {...props} />;
        case KEYS.CUPCAKE:
            return <Food.Cupcake.Single itemKey={itemKey} {...props} />;
        case KEYS.EGGS:
            return <Food.Eggs.Single itemKey={itemKey} {...props} />;
        case KEYS.GRAPE:
            return <Food.Grape.Single itemKey={itemKey} {...props} />;
        case KEYS.ICECREAM:
            return <Food.IceCream.Single itemKey={itemKey} {...props} />;
        case KEYS.JUICE:
            return <Food.Juice.Single itemKey={itemKey} {...props} />;
        case KEYS.LETTUCE:
            return <Food.Lettuce.Single itemKey={itemKey} {...props} />;
        case KEYS.MILK:
            return <Food.Milk.Single itemKey={itemKey} {...props} />;
        case KEYS.ORANGE:
            return <Food.Orange.Single itemKey={itemKey} {...props} />;
        case KEYS.PASTA:
            return <Food.Pasta.Single itemKey={itemKey} {...props} />;
        case KEYS.PINEAPPLE:
            return <Food.Pineapple.Single itemKey={itemKey} {...props} />;
        case KEYS.POTATO:
            return <Food.Potato.Single itemKey={itemKey} {...props} />;
        case KEYS.RICE:
            return <Food.Rice.Single itemKey={itemKey} {...props} />;
        case KEYS.ROLL:
            return <Food.Roll.Single itemKey={itemKey} {...props} />;
        case KEYS.SODA:
            return <Food.Soda.Single itemKey={itemKey} {...props} />;
        case KEYS.STEAK:
            return <Food.Steak.Single itemKey={itemKey} {...props} />;
        case KEYS.TOFU:
            return <Food.Tofu.Single itemKey={itemKey} {...props} />;
        case KEYS.TOMATO:
            return <Food.Tomato.Single itemKey={itemKey} {...props} />;
        case KEYS.TUNA:
            return <Food.Tuna.Single itemKey={itemKey} {...props} />;
        case KEYS.WATER:
            return <Food.Water.Single itemKey={itemKey} {...props} />;
        case KEYS.YOGHURT:
            return <Food.Yoghurt.Single itemKey={itemKey} {...props} />;
        default:
            return <Food.Yoghurt.Single itemKey={itemKey} {...props} />;
    }
}

export const BLENDER_COLORS = {
    APPLE: Fill.appleRed,
    AVOCADO: Fill.avocadoGreenA,
    BACON: Fill.baconPinkD,
    BANANA: Fill.bananaYellowA,
    BREAD: Fill.breadBrown,
    BROCCOLI: Fill.broccoliGreenC,
    CARROT: Fill.carrotOrangeB,
    CEREAL: Fill.cerealBrown,
    CHEESE: Fill.cheeseYellowB,
    CHERRY: Fill.cherryRedA,
    CHIPS: Fill.chipsLightBrown,
    CHOCOBAR: Fill.chocoBarBrownA,
    CUPCAKE: Fill.cupcakePinkB,
    EGGS: Fill.eggBrown,
    GRAPE: Fill.grapePurpleA,
    ICECREAM: Fill.iceCreamGreenA,
    JUICE: Fill.juiceOrange,
    LETTUCE: Fill.lettuceGreenB,
    MILK: Fill.milkWhite,
    ORANGE: Fill.orangeA,
    PASTA: Fill.pastaYellowA,
    PINEAPPLE: Fill.pineappleYellowA,
    POTATO: Fill.potatoBrownE,
    RICE: Fill.riceGrey,
    ROLL: Fill.rollBrown,
    SODA: Fill.sodaBrown,
    STEAK: Fill.steakBrownA,
    TOFU: Fill.tofuGreyB,
    TOMATO: Fill.tomatoRedB,
    TUNA: Fill.tunaGrey,
    WATER: Fill.waterBlueD,
    YOGHURT: Fill.yoghurtGreyB,
}

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const TARGETS = {
    TROLLEY: "TROLLEY",
    BASKET: "BASKET",
    BLENDER: "BLENDER",
}

// ----------------------------------
