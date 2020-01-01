import axios from "axios";
import {key} from "../config";

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.publisher = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.ingredients = res.data.recipe.ingredients;
            this.url = res.data.recipe.source_url;
        }
        catch(err) {
            alert('something went wrong!');
        }
    }

    calcTime() {
        //// assuming 3 ingredients takes 15 min 
        const numOfIng = this.ingredients.length;
        const periods = Math.ceil(numOfIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const oldUnits = ['teaspoons', 'teaspoon', 'tablespoons', 'tablespoon', 'grams', 'gram', 'cups', 'ounces', 'ounce', 'pounds'];
        const newUnits = ['tsp', 'tsp', 'tbps', 'tbps', 'g', 'g', 'cup', 'oz', 'oz' , 'pound'];
        const units = [...newUnits, 'g', 'kg']; // include gram ang kg for use in unitIndex

        const newIngredients = this.ingredients.map( el => {
            // 1) uniform units
            // Ex- teaspoons or teaspoon --> tsp
            let ingredient = el.toLowerCase();
        
            oldUnits.forEach( (unit, i) => {
                ingredient = ingredient.replace(unit, newUnits[i]);
            });

            // 2) remove parenthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3) parse the Ingredients into count/quantity, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
            
            let objIng;
            if(unitIndex > -1){
                // 1) when unit is given
                // ex- 1 1/4 cup --> arrCount [1, 1/4] eval("1+1/4") --> 1.25 
                // ex- 2 cup --> arrCount [1] eval("1") --> 1 (you passed a string expression and got number)
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if(arrCount.length === 1){
                    // for  1-1/4 quantities remove - add +
                    count = eval(arrCount[0].replace('-', '+'));
                }
                else {
                    count = eval(arrCount.join('+')); // join by default use , to join elements
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }
            }
            else if(parseInt(arrIng[0], 10)) {
                // 2) when unit is not giving but the first element in arrIng is a quantity 
                objIng = {
                    count : parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            }
            else if(unitIndex === -1) {
                // 3) when unit is not given
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            return objIng;
        });
        this.ingredients = newIngredients;
    }

    updateServings(type) {     //type --> dec, inc
        // update servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;
        
        // update Ingredients
        this.ingredients.forEach(el => {
            el.count *= (newServings / this.servings);
        });
        this.servings = newServings;
    }
}