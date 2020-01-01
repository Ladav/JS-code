import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };

        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const itemIndex = this.items.findIndex(el => el.id === id);
        //slice(startIndex, endIndex(not including endIndex))(return but not modify original arr)
        //splice(startIndex, no-of-elements) (return and modifies the original array)
        if(itemIndex !== -1) 
            this.items.splice(itemIndex, 1); 
    }

    updateItem(id, count) {
        this.items.find(el => el.id === id).count = count;
    }
}