export default class Like {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, publisher, img) {
        const like = {id, title, publisher, img};
        this.likes.push(like);

        // persist the likes array in localStorage
        this.persistState();

        return like;
    }

    deleteLike(id) {
        const likeIndex = this.likes.findIndex(el => el.id === id);
        if(likeIndex !== -1) 
            this.likes.splice(likeIndex, 1);

        // persist the likes array in localStorage
        this.persistState();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistState() {
        localStorage.setItem('likesArr',`${JSON.stringify(this.likes)}`);
    }

    restoreLikes() {
        const storage = JSON.parse(localStorage.getItem('likesArr'));
        if(storage) this.likes = storage;
    }
}