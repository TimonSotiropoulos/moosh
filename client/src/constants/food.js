// *******************************************************
// Food.js
// -------------------------------------------------------
// All food constants used through-out the application
// -------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import React, { Component } from 'react';
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

export const TYPE_DEFS = {
    VEGETABLES: "VEGETABLES",
    FRUIT: "FRUIT",
    GRAINS: "GRAINS",
    PROTEIN: "PROTEIN",
    DAIRY: "DAIRY",
    SOMETIMES: "SOMETIMES",
    WATER: "WATER",
}

export const TYPES = {
    APPLE: TYPE_DEFS.FRUIT,
    AVOCADO: TYPE_DEFS.VEGETABLES,
    BACON: TYPE_DEFS.PROTEIN,
    BANANA: TYPE_DEFS.FRUIT,
    BREAD: TYPE_DEFS.GRAINS,
    BROCCOLI: TYPE_DEFS.VEGETABLES,
    CARROT: TYPE_DEFS.VEGETABLES,
    CEREAL: TYPE_DEFS.GRAINS,
    CHEESE: TYPE_DEFS.DAIRY,
    CHERRY: TYPE_DEFS.FRUIT,
    CHIPS: TYPE_DEFS.SOMETIMES,
    CHOCOBAR: TYPE_DEFS.SOMETIMES,
    CUPCAKE: TYPE_DEFS.SOMETIMES,
    EGGS: TYPE_DEFS.PROTEIN,
    GRAPE: TYPE_DEFS.FRUIT,
    ICECREAM: TYPE_DEFS.SOMETIMES,
    JUICE: TYPE_DEFS.SOMETIMES,
    LETTUCE: TYPE_DEFS.VEGETABLES,
    MILK: TYPE_DEFS.DAIRY,
    ORANGE: TYPE_DEFS.FRUIT,
    PASTA: TYPE_DEFS.GRAINS,
    PINEAPPLE: TYPE_DEFS.FRUIT,
    POTATO: TYPE_DEFS.VEGETABLES,
    RICE: TYPE_DEFS.GRAINS,
    ROLL: TYPE_DEFS.GRAINS,
    SODA: TYPE_DEFS.SOMETIMES,
    STEAK: TYPE_DEFS.PROTEIN,
    TOFU: TYPE_DEFS.PROTEIN,
    TOMATO: TYPE_DEFS.VEGETABLES,
    TUNA: TYPE_DEFS.PROTEIN,
    WATER: TYPE_DEFS.WATER,
    YOGHURT: TYPE_DEFS.DAIRY,
}

export const SUGAR_CONTENT = {
    CHIPS: 0,
    CHOCOBAR: 29,
    CUPCAKE: 25,
    ICECREAM: 26,
    JUICE: 16,
    SODA: 40
}

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const TARGETS = {
    TROLLEY: "TROLLEY",
    BASKET: "BASKET",
    BLENDER: "BLENDER",
}

// ----------------------------------
