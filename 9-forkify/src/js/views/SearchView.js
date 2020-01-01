import { elements } from './base';

export const getInput = () => elements.searchInput.value;

// to clear the input recipe name from the search bar
export const clearInput = () => {
    elements.searchInput.value = '';
};

// to clear the last recipe's result in order to new results ('beforeend')
export const clearResult = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPage.innerHTML = '';
};

export const highlightSelected = id => {
    // clear the previously selected recipe
    const selectAll = Array.from(document.querySelectorAll('.results__link'));
    selectAll.forEach(el => {
        el.classList.remove('link__selected')
    });

    // highlight the selected recipe
      // why if -> when choosing from likeList it is prossible that selected item is not is the search list ex-> list for pizza is displayed but you selected ice-cream recipe from likebtn
    const currentRecipe = document.querySelector(`.results__link[href*="#${id}"]`);
    if(currentRecipe) currentRecipe.classList.add('link__selected');

};

// modify the title if it occupies more then one line
/*          how things works
*   suppose title is 'hamburger tokyo brilliant'
*   at 23: ['hamburger', 'tokyo', 'brilliant'];
*   iteration 1: acc=0 & cur='this' ->if(0+9<=17)T -newTitle['hamburger']
*   iteration 1: acc=0 & cur='this' ->if(9+5<=17)T -newTitle['hamburger', 'tokyo']
*   iteration 1: acc=0 & cur='this' ->if(14+9<=17)F (23!<=17) -newTitle['hamburger', 'tokyo']
*/
export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0); 
        return `${newTitle.join(' ')} ...`;   
    }
    return title; 
};

const renderRecipe = recipe => {

    const markup = `
        <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
        </li>
    `;
    //console.log(recipe.title);
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

// type: 'prev' and 'next'
const createButton = (page, type) => 
    `
        <button class="btn-inline results__btn--${type}" data-goto=${type === "prev" ? page - 1 : page + 1}>
            <span>Page ${type === "prev" ? page - 1 : page + 1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === "prev" ? 'left' : 'right'}"></use>
            </svg>
        </button>
    `;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let buttonHTML;
    if(page === 1) {
        // only btn to next page ex- page 2
        buttonHTML = createButton(page, 'next');
    }
    else if(page < pages) {
        // btn to the next page and to the previous page
        buttonHTML = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    }
    else if(page === pages) {
        // only btn to previous page
        buttonHTML = createButton(page, 'prev');
    }

    elements.searchResPage.insertAdjacentHTML('beforeend', buttonHTML);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) =>  {
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    // show recipes list
    recipes.slice(start, end).forEach(renderRecipe);   // from start till end but not including end

    // show buttons
    renderButtons(page, recipes.length, resPerPage);
};