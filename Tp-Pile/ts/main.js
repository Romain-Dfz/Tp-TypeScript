"use strict";
class Pile {
    constructor() {
        this.elements = [];
    }
    empiler(element) {
        this.elements.push(element);
    }
    depiler() {
        if (!this.estVide()) {
            return this.elements.pop();
        }
        else {
            console.log("La pile est vide. Impossible de dépiler.");
            return undefined;
        }
    }
    estVide() {
        return this.elements.length === 0;
    }
}
const maPile = new Pile();
maPile.empiler(1);
maPile.empiler(2);
maPile.empiler(3);
console.log("Pile avant dépilement :", maPile);
const elementDepile = maPile.depiler();
console.log("Élément dépilé :", elementDepile);
console.log("Pile après dépilement :", maPile);
