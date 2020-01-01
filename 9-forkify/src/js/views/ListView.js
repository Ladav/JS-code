import { elements } from './base';

const isFraction = el => {
    // ex- 2.3 --> Math.ceil(2.3) = 3 --> 3 - 2.3 > 0 so true(Condition)
    // ex- 3 --> Math.ceil(3) = 3 --> 3 - 3 === 0 (if(0)==if(flase))
    if(Math.ceil(el) - el) return true; 
    else return false;
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if(item) item.parentElement.removeChild(item);
};

export const renderList = item => {
    let markup = '';

    // if the number is integer and in hundreds the step(in inputtype) should be hundred
    if(item.count >= 100 && !isFraction(item.count)) {
        markup = `
            <li class="shopping__item" data-itemid="${item.id}">
                <div class="shopping__count">
                    <input type="number" value="${item.count}" step="10" class="shopping__Count--value">
                    <p>${item.unit}</p>
                </div>
                <p class="shopping__description">${item.ingredient}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            </li>
        `;
    }
    else if(item.count >= 10 && item.count < 100 && !isFraction(item.count)) {     //number is integer and less than 100
        markup = `
            <li class="shopping__item" data-itemid="${item.id}"">
                <div class="shopping__count">
                    <input type="number" value="${item.count}" step="1" class="shopping__Count--value">
                    <p>${item.unit}</p>
                </div>
                <p class="shopping__description">${item.ingredient}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            </li>
        `;
    }
    else if(isFraction(item.count) || item.count < 10) //when count is in fraction
        markup = `
            <li class="shopping__item" data-itemid="${item.id}"">
                <div class="shopping__count">
                    <input type="number" value="${item.count}" step="0.1" class="shopping__Count--value">
                    <p>${item.unit}</p>
                </div>

                <p class="shopping__description">${item.ingredient}</p>
                <button class="shopping__delete btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-cross"></use>
                    </svg>
                </button>
            </li>
        `;

    elements.shoppingList.insertAdjacentHTML('beforeend', markup);
};