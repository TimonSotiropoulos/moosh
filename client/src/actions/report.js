// *******************************************************
// Report Actions
// -------------------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import ACTIONS from './index';
import { push } from 'react-router-redux';
import CONFIG from '../config.js';
import axios from 'axios';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes, FOOD, Scoring, Outcomes } from '../constants';
// --------------------------------

// *******************************************
// Action Definitions
// -------------------------------------------

export const createReportFromFood = (blenderContent, appData) => {

    return dispatch => {

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

        const vegetablesRatio = Math.round((vegetables.length/totalItems) * 7);
        const fruitRatio = Math.round((fruit.length/totalItems) * 7);
        const grainsRatio = Math.round((grains.length/totalItems) * 7);
        const proteinRatio = Math.round((protein.length/totalItems) * 7);
        const dairyRatio = Math.round((dairy.length/totalItems) * 7);

        const { balanceScore, vegetableScore, fruitScore, grainsScore, proteinScore, dairyScore } = rateBalance(vegetablesRatio, fruitRatio, grainsRatio, proteinRatio, dairyRatio);

        const portionsScore = ratePortions(totalItems);
        const sugarScore = rateSugar(sometimes);

        const ratios = {
            vegetables: vegetablesRatio,
            fruit: fruitRatio,
            grains: grainsRatio,
            protein: proteinRatio,
            dairy: dairyRatio,
        }

        const outcomeScore = detemineOutcome(balanceScore, vegetableScore, fruitScore, grainsScore, proteinScore, dairyScore, portionsScore, sugarScore, ratios);

        const scores = {
            outcome: outcomeScore,
            balance: balanceScore,
            portions: portionsScore,
            sugar: sugarScore,
            water: (water.length > 0) ? Scoring.HIGH : Scoring.LOW,
            vegetables: vegetableScore,
            fruit: fruitScore,
            grains: grainsScore,
            protein: proteinScore,
            dairy: dairyScore,
        };

        dispatch(push(Routes.Result));
        dispatch({
            type: ACTIONS.TYPES.CREATE_REPORT,
            scores
        });

        // Create report data for zapier
        const body = {
            sessionID: appData.sessionID,
            age: appData.age,
            postcode: appData.postcode,
            vegetables: vegetables.length,
            fruit: fruit.length,
            grains: grains.length,
            protein: protein.length,
            dairy: dairy.length,
            sugarScore: sugarScore,
            balanceScore: balanceScore,
            portionsScore: portionsScore
        }

        saveReportToSpreadsheet(body);

    }
}

const detemineOutcome = (balanceScore, vegetableScore, fruitScore, grainsScore, proteinScore, dairyScore, portionsScore, sugarScore, ratios) => {

    //  Currently No egg Outcome?


    if (sugarScore === Scoring.LOW) {
        return Outcomes.HYPER;
    }

    if (portionsScore === Scoring.LOW) {
        return Outcomes.SLEEP;
    }

    if (balanceScore === Scoring.HIGH &&
        vegetableScore === Scoring.HIGH &&
        fruitScore === Scoring.HIGH &&
        grainsScore === Scoring.HIGH &&
        proteinScore === Scoring.HIGH &&
        dairyScore === Scoring.HIGH &&
        portionsScore === Scoring.HIGH &&
        sugarScore === Scoring.HIGH) {
        return Outcomes.DISCO;
    }

    if (balanceScore === Scoring.HIGH &&
        portionsScore === Scoring.HIGH &&
        sugarScore === Scoring.HIGH) {
            return Outcomes.PARTY;
        }

    let highestValue = 0;
    let highestCategory;

    Object.keys(ratios).forEach((category) => {
        if (ratios[category] > highestValue) {
            highestValue = ratios[category];
            highestCategory = category
        }
    });

    switch (highestCategory) {
        case "vegetables":
            return Outcomes.BROCCOLI;
        case "fruit":
            return Outcomes.FART;
        case "grains":
            return Outcomes.POOP;
        case "protein":
            return Outcomes.COW;
        case "dairy":
            return Outcomes.VOMIT;
        default:
            return Outcomes.SLEEP;
    }
}

const ratePortions = (totalItems) => {
    if (totalItems >= 0 && totalItems <= 2) {
        return Scoring.LOW;
    }
    if (totalItems >= 3 && totalItems < 5) {
        return Scoring.MEDIUM;
    }
    if (totalItems >= 5 && totalItems <= 10) {
        return Scoring.HIGH;
    }
    if (totalItems >= 11 && totalItems <= 13) {
        return Scoring.MEDIUM;
    }
    if (totalItems >= 14) {
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

const saveReportToSpreadsheet = (body) => {

    const params = {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: false,
        data: body
    }

    console.log("SENDING API REPONSE");
    console.log(body);

    axios(CONFIG.ZAPIER_API, params)
    .then((response) => {
        console.log(response);
        console.log("Saved Response Sueccessfulyl");
    })
    .catch((err) => {
        console.log("Error sending zapier response");
        console.log(err);
    });
}

// --------------------------------
