import { elements } from './base';
import { limitRecipeTitle } from './SearchView';

export const toggleLikeBtn = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href',
     `img/icons.svg#${iconString}`);
};

export const toggleLikeMenu = numLikes => {
    elements.likeMenu.style.visibility = (numLikes >= 1) ? 'visible' : 'hidden';
};

export const deleteLike = id => {
    const like = document.querySelector(`.likes__link[href="#${id}"]`).parentElement;
    like.parentElement.removeChild(like);
};

export const renderLikes = like => {
    const markup = `
        <li>
            <a class="likes__link" href="#${like.id}">
                <figure class="likes__fig">
                    <img src="${like.img}" alt="${like.title}">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                    <p class="likes__author">${like.publisher}</p>
                </div>
            </a>
        </li>
    `;

    elements.likeList.insertAdjacentHTML('afterbegin', markup);  
};