// *******************************************************
// Report Actions
// -------------------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import ACTIONS from './index';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { FOOD, Scoring } from '../constants';
// --------------------------------

// *******************************************
// Action Definitions
// -------------------------------------------

export const createReportFromFood = (blenderContent) => {

    let vegetables = [];
    let fruit = [];
    let grains = [];
    let protein = [];
    let dairy = [];
    let sometimes = [];
    let water = [];

    blenderContent.forEach((itemKey) => {
        switch(FOOD.TYPES[itemKey]) {
            case FOOD.TYPE_DEFS.VEGETABLES:
                vegetables.push(itemKey);
                break;
            case FOOD.TYPE_DEFS.FRUIT:
                fruit.push(itemKey);
                break;
            case FOOD.TYPE_DEFS.GRAINS:
                grains.push(itemKey);
                break;
            case FOOD.TYPE_DEFS.PROTEIN:
                protein.push(itemKey);
                break;
            case FOOD.TYPE_DEFS.DAIRY:
                dairy.push(itemKey);
                break;
            case FOOD.TYPE_DEFS.SOMETIMES:
                sometimes.push(itemKey);
                break;
            case FOOD.TYPE_DEFS.WATER:
                water.push(itemKey);
                break;
            default:
                console.log("Type def not found for item key: " + itemKey);
                break;
        }
    })

    const totalItems = vegetables.length + fruit.length + grains.length + protein.length + dairy.length + sometimes.length;

    const vegetablesRatio = Math.round(vegetables.length/totalItems);
    const fruitRatio = Math.round(fruit.length/totalItems);
    const grainsRatio = Math.round(grains.length/totalItems);
    const proteinRatio = Math.round(protein.length/totalItems);
    const dairyRatio = Math.round(dairy.length/totalItems);

    const { balanceScore, vegetableScore, fruitScore, grainsScore, proteinScore, dairyScore } = rateBalance(vegetablesRatio, fruitRatio, grainsRatio, proteinRatio, dairyRatio);

    const scores = {
        balance: balanceScore,
        portions: ratePortions(totalItems),
        sugar: rateSugar(sometimes),
        water: (water.length > 0) ? Scoring.HIGH : Scoring.LOW,
        vegetables: vegetableScore,
        fruit: fruitScore,
        grains: grainsScore,
        protein: proteinScore,
        dairy: dairyScore,
    };

    return {
        type: ACTIONS.TYPES.CREATE_REPORT,
        scores
    };
}

const ratePortions = (totalItems) => {
    if (totalItems >= 0 && totalItems <= 2) {
        return Scoring.LOW;
    }
    if (totalItems >= 3 && totalItems <= 5) {
        return Scoring.MEDIUM;
    }
    if (totalItems >= 5 && totalItems <= 9) {
        return Scoring.HIGH;
    }
    if (totalItems >= 10 && totalItems <= 12) {
        return Scoring.MEDIUM;
    }
    if (totalItems >= 13) {
        return Scoring.LOW;
    }
}

const rateSugar = (sometimesFoods) => {
    let sugarTotal = 0;
    sometimesFoods.forEach((itemKey) => {
        sugarTotal = sugarTotal + FOOD.SUGAR_CONTENT[itemKey];
    });

    if (sugarTotal <= 18) {
        return Scoring.HIGH;
    }
    if (sugarTotal <= 24) {
        return Scoring.MEDIUM;
    }
    return Scoring.LOW;
}

const rateBalance = (vegetablesRatio, fruitRatio, grainsRatio, proteinRatio, dairyRatio) => {

    const vegetableScore = targetTwoRatio(vegetablesRatio);
    const fruitScore = targetOneRatio(fruitRatio);
    const grainsScore = targetTwoRatio(grainsRatio);
    const proteinScore = targetOneRatio(proteinRatio);
    const dairyScore = targetOneRatio(dairyRatio);

    const scoreArray = [vegetableScore, fruitScore, grainsScore, proteinScore, dairyScore];

    let highScores = [];
    let medScores = [];
    let lowScores = [];

    scoreArray.forEach((SCORE_KEY) => {
        switch(SCORE_KEY) {
            case Scoring.HIGH:
                highScores.push(SCORE_KEY);
                break;
            case Scoring.MEDIUM:
                medScores.push(SCORE_KEY);
                break;
            case Scoring.LOW:
                lowScores.push(SCORE_KEY);
                break;
            default:
                console.log("NO SORE KEY MATCH?");
                break;
        }
    });

    let balanceScore;
    if (highScores.length >= 4) {
        balanceScore = Scoring.HIGH;
    } else if (lowScores.length >= 2) {
        balanceScore = Scoring.LOW;
    } else {
        balanceScore = Scoring.MEDIUM;
    }

    return {
        balanceScore,
        vegetableScore,
        fruitScore,
        grainsScore,
        proteinScore,
        dairyScore,
    };

}

const targetOneRatio = (ratio) => {
    if (ratio === 0) {
        return Scoring.LOW;
    }
    if (ratio === 1) {
        return Scoring.HIGH;
    }
    if (ratio >= 2 && ratio <= 3) {
        return Scoring.MEDIUM;
    }
    return Scoring.LOW;
}

const targetTwoRatio = (ratio) => {
    if (ratio === 0) {
        return Scoring.LOW;
    }
    if (ratio === 1) {
        return Scoring.MEDIUM;
    }
    if (ratio === 2) {
        return Scoring.HIGH;
    }
    if (ratio >= 3 && ratio <= 4) {
        return Scoring.MEDIUM;
    }
    return Scoring.LOW;
}

// --------------------------------
