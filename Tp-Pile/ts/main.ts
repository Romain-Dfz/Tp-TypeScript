class Pile<T> {
    private elements: T[] = [];
    empiler(element: T): void {
        this.elements.push(element);
    }
    depiler(): T | undefined {
        if (!this.estVide()) {
            return this.elements.pop();
        } else {
            console.log("La pile est vide. Impossible de dépiler.");
            return undefined;
        }
    }
    estVide(): boolean {
        return this.elements.length === 0;
    }
}
const maPile = new Pile<number>();

maPile.empiler(1);
maPile.empiler(2);
maPile.empiler(3);

console.log("Pile avant dépilement :", maPile);

const elementDepile = maPile.depiler();
console.log("Élément dépilé :", elementDepile);

console.log("Pile après dépilement :", maPile);
