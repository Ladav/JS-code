import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as SearchView from './views/SearchView';
import * as RecipeView from './views/RecipeView';
import * as ListView from './views/ListView';
import * as LikeView from './views/LikeView';
import { elements, renderLoader, clearLoader } from './views/base';


/**  Global State of the app
* -  Search object
* -  Current Recipes object
* -  Shopping List object
* -  Liked object
**/

const state = {};

/**
 *  Search and recipe list constroller
**/
const controlSearch = async () => {
    // 1) - Get query from the view
    const query = SearchView.getInput();   

    if(query) {
        // 2) - Create a new  Search Object add it to state
        state.search = new Search(query);

        // 3) - prepare UI for results(show animation etc)
        SearchView.clearInput();
        SearchView.clearResult();
        renderLoader(elements.searchRes);

        try {
            // 4) - get current Recipes
            await state.search.getResult();
            
            // 5) - render results on UI
            clearLoader();   // hiding the loader(animation)
            SearchView.renderResults(state.search.result);
        }
        catch(err) {
            alert("something wrong with the search!");
            clearLoader(); 
        }
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPage.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        SearchView.clearResult();
        SearchView.renderResults(state.search.result, goToPage);
    }
});


/**
 *  Recipe constroller
**/
 const controlRecipe = async () => {
    // get id
    const id  = window.location.hash.replace('#','');

    if(id){
        // prepare UI
        RecipeView.clearRecipe();
        renderLoader(elements.recipe);

        // highlight selected search item
        if(state.search) SearchView.highlightSelected(id);
        
        // create Recipe object
        state.recipe = new Recipe(id);
        try {
            // get Recipe's data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // calculate Time and Servings
            state.recipe.calcTime();
            state.recipe.calcServings();
            
            // Render results on UI
            clearLoader();
            RecipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        }
        catch(err) {
            alert('Error Processing Recipe!');
        }
    }
 };

// window.addEventListener(`hashchange`, controlRecipe);
// window.addEventListener(`load`, controlRecipe);
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


/**
 *  List constroller
**/
const controlList = () => {
    // create a new list if there is not
    if(!state.list) state.list = new List();

    // add ingredients to the list
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        ListView.renderList(item);
    });
};

// Handling update and delete item events
elements.shoppingList.addEventListener('click', e => {
    const id  = e.target.closest('.shopping__item').dataset.itemid;
    // delete item and update UI
    if(e.target.matches('.shopping__delete, .shopping__delete *')) {
        state.list.deleteItem(id);      // remove item from Data Structure
        ListView.deleteItem(id);        // remove item from UI
    }// update count in item
    else if(e.target.matches('.shopping__Count--value')) {
        const newCount = parseFloat(e.target.value, 10);
        state.list.updateItem(id, newCount)
    }
});


/**
 *  Like constroller
**/
const controlLikes = () => {
     // create a new like if there is not
     if(!state.likes) state.likes = new Likes();
     const currentID = state.recipe.id;

     // delete item (When like is clicked again to unlike)
     if(!state.likes.isLiked(currentID)){
        // add like to the state
        const newlike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.publisher,
            state.recipe.img
        );

        // toggle the like
        LikeView.toggleLikeBtn(true);    
        
        // add like to UI
        LikeView.renderLikes(newlike);

     }  // user clicked the icon to the recipe
     else {
        // remove like from the state
        state.likes.deleteLike(currentID);

        // toggle the like
        LikeView.toggleLikeBtn(false);
        
        // remove like from UI
        LikeView.deleteLike(currentID);
     }
     LikeView.toggleLikeMenu(state.likes.getNumLikes());
};


// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes(); 

    // restoring likes form localStorage
    state.likes.restoreLikes();

    // toggle the like btn
    LikeView.toggleLikeMenu(state.likes.getNumLikes()); 

    // render like on UI
    state.likes.likes.forEach(el => LikeView.renderLikes(el));
});


// Handling current recipe page events 
elements.recipe.addEventListener('click', e => {
    // update ingredients
    if(e.target.matches('.btn-decrease, .btn-decrease *')) { // btn-decrease* select all children
        if(state.recipe.servings > 1) state.recipe.updateServings('dec');
        // update UI
        RecipeView.updateServingsIngredients(state.recipe);
    }
    else if(e.target.matches('.btn-increase, .btn-increase *')) {  
        state.recipe.updateServings('inc');
        // update UI
        RecipeView.updateServingsIngredients(state.recipe);
    }   // handling add to shopping list 
    else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    }   // handling like button
    else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLikes();
    }

});

